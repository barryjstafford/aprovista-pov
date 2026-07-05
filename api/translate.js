// Vercel serverless function — translates AproVista POV HTML on demand.
// POST { html: "...", lang: "it|fr|de|es" } → { html: "translated..." }

const LANG_NAMES = {
  it: 'Italian',
  fr: 'French',
  de: 'German',
  es: 'Spanish'
};

const SYSTEM_PROMPT =
  'You translate HTML for a B2B sales brief. Preserve every HTML tag, attribute, ' +
  'class, id, href, src, and URL exactly. Do NOT translate: URLs, email addresses, ' +
  'stock tickers, currency figures, company legal names, people names, product names, ' +
  'or these brand terms — AproVista, AproScore, Apromore, AFPI, Agentforce, Salesforce, ' +
  'Slack, Org62, Celonis, ARIS, Signavio, ABBYY, ServiceNow, Appian, UiPath, Power Automate, ' +
  'SAP, Oracle, Informatica, Workday. Translate all other visible prose, headings, labels, ' +
  'and button text. Return ONLY the translated HTML — no code fences, no commentary.';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'POST only' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured in Vercel env' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { return res.status(400).json({ error: 'invalid JSON body' }); }
  }
  const { html, lang } = body || {};
  if (!html || typeof html !== 'string') return res.status(400).json({ error: 'html required' });
  if (!lang || !LANG_NAMES[lang]) return res.status(400).json({ error: 'unsupported lang' });
  if (html.length > 60000) return res.status(413).json({ error: 'html too large' });

  const target = LANG_NAMES[lang];

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 8000,
        system: SYSTEM_PROMPT,
        messages: [{
          role: 'user',
          content: 'Translate the following HTML fragment to ' + target + '.\n\n' + html
        }]
      })
    });

    if (!upstream.ok) {
      const detail = await upstream.text();
      return res.status(502).json({ error: 'upstream translation failed', status: upstream.status, detail: detail.slice(0, 500) });
    }

    const data = await upstream.json();
    let translated = (data.content && data.content[0] && data.content[0].text) || '';
    translated = translated.replace(/^\s*```html\s*/i, '').replace(/\s*```\s*$/, '').trim();

    if (!translated) return res.status(502).json({ error: 'empty translation' });

    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json({ html: translated, lang });
  } catch (err) {
    return res.status(500).json({ error: 'translation error', detail: String(err && err.message || err) });
  }
}
