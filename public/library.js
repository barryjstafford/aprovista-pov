const LIBRARY = [
  { name: "Architectural Graphics, Inc.", slug: "agi-architectural-graphics", region: "AMER" },
  { name: "Alfa Laval Corporate AB", slug: "alfa-laval", region: "EMEA" },
  { name: "Ares Management Corporation", slug: "ares-management", region: "AMER" },
  { name: "Australian Unity Limited", slug: "australian-unity", region: "APAC" },
  { name: "Bank of New York Mellon Corporation", slug: "bny-mellon", region: "AMER" },
  { name: "Black Hills Corporation", slug: "black-hills-corporation", region: "AMER" },
  { name: "Cars.com Inc.", slug: "cars-commerce", region: "AMER" },
  { name: "CenterPoint Energy, Inc.", slug: "centerpoint-energy", region: "AMER" },
  { name: "Columbus McKinnon Corporation", slug: "columbus-mckinnon", region: "AMER" },
  { name: "Corteva, Inc.", slug: "corteva", region: "AMER" },
  { name: "Daimler Truck Holding AG", slug: "daimler-truck", region: "EMEA" },
  { name: "Dell Technologies Inc.", slug: "dell-technologies", region: "AMER" },
  { name: "DNOW Inc.", slug: "dnow", region: "AMER" },
  { name: "DTCC (Depository Trust & Clearing)", slug: "dtcc", region: "AMER" },
  { name: "Expedia Group, Inc.", slug: "expedia-group", region: "AMER" },
  { name: "Genpact Limited", slug: "genpact", region: "AMER" },
  { name: "Inspira Financial Trust, LLC", slug: "inspira-financial", region: "AMER" },
  { name: "JM Family Enterprises, Inc.", slug: "jm-family", region: "AMER" },
  { name: "JPMorgan Chase & Co.", slug: "jp-morgan-chase", region: "AMER" },
  { name: "Kito Crosby Limited", slug: "kito-crosby", region: "AMER" },
  { name: "Lucid Group, Inc.", slug: "lucid-motors", region: "AMER" },
  { name: "Macquarie Group Limited", slug: "macquarie-group", region: "APAC" },
  { name: "Manulife Financial Corporation", slug: "manulife", region: "AMER" },
  { name: "Mastercard Incorporated", slug: "mastercard", region: "AMER" },
  { name: "MetLife, Inc.", slug: "metlife", region: "AMER" },
  { name: "Mueller Water Products, Inc.", slug: "mueller-water-products", region: "AMER" },
  { name: "National Bank of Canada", slug: "national-bank-of-canada", region: "AMER" },
  { name: "Optum Financial, Inc.", slug: "optum-financial", region: "AMER" },
  { name: "Stellantis Financial Services, Inc.", slug: "stellantis-financial", region: "AMER" },
  { name: "Sysco Corporation", slug: "sysco", region: "AMER" },
  { name: "The Hartford Financial Services Group, Inc.", slug: "the-hartford", region: "AMER" },
  { name: "Trex Company, Inc.", slug: "trex", region: "AMER" },
  { name: "U.S. Bancorp", slug: "us-bank", region: "AMER" },
  { name: "Westpac Banking Corporation", slug: "westpac", region: "APAC" },
  { name: "Workday, Inc.", slug: "workday", region: "AMER" },
  { name: "WSFS Financial Corporation", slug: "wsfs-financial", region: "AMER" }
];

const REGIONS = [
  { key: "AMER", label: "AMER — Americas" },
  { key: "EMEA", label: "EMEA — Europe, Middle East, Africa" },
  { key: "APAC", label: "APAC — Asia-Pacific" }
];

function toggleLib() {
  const menu = document.getElementById('libMenu');
  if (!menu) return;
  const wasOpen = menu.classList.contains('open');
  menu.classList.toggle('open');
  if (!wasOpen) {
    const search = document.getElementById('libSearch');
    if (search) { search.value = ''; filterLib(''); setTimeout(function() { search.focus(); }, 0); }
  }
}

function toggleRegion(key) {
  const sec = document.getElementById('lib-region-' + key);
  if (sec) sec.classList.toggle('open');
}

function filterLib(q) {
  const needle = (q || '').trim().toLowerCase();
  REGIONS.forEach(function(r) {
    const sec = document.getElementById('lib-region-' + r.key);
    if (!sec) return;
    const links = sec.querySelectorAll('a');
    let visible = 0;
    links.forEach(function(a) {
      const name = a.getAttribute('data-name') || a.textContent;
      if (!needle || name.toLowerCase().indexOf(needle) !== -1) {
        a.classList.remove('hidden'); visible++;
      } else {
        a.classList.add('hidden');
      }
    });
    sec.classList.remove('empty');
    if (needle) {
      if (visible > 0) sec.classList.add('open');
      else sec.classList.add('empty');
    } else {
      sec.classList.remove('open');
    }
  });
}

window.addEventListener('click', function(e) {
  if (!e.target.closest('.lib-wrap')) {
    const menu = document.getElementById('libMenu');
    if (menu) menu.classList.remove('open');
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('libList');
  if (!list) return;

  const style = document.createElement('style');
  style.textContent =
    '.lib-region { border-bottom: 1px solid #f0f4ff; }' +
    '.lib-region:last-child { border-bottom: none; }' +
    '.lib-region-header { display: block; width: 100%; text-align: left;' +
    ' padding: 8px 15px; background: #f0f4ff; color: #032d60; border: none;' +
    ' font-size: .85em; font-weight: 600; cursor: pointer; font-family: inherit; }' +
    '.lib-region-header:hover { background: #dde3f0; }' +
    '.lib-region-header .caret { display: inline-block; width: 10px;' +
    ' transition: transform .15s; margin-right: 4px; }' +
    '.lib-region.open .lib-region-header .caret { transform: rotate(90deg); }' +
    '.lib-region-count { color: #667; font-weight: 400; margin-left: 6px; font-size: .9em; }' +
    '.lib-region-items { display: none; }' +
    '.lib-region.open .lib-region-items { display: block; }' +
    '.lib-region.empty { display: none; }' +
    '.lib-region-items a { padding-left: 28px !important; }';
  document.head.appendChild(style);

  const grouped = { AMER: [], EMEA: [], APAC: [] };
  LIBRARY.forEach(function(co) {
    const key = grouped[co.region] ? co.region : 'AMER';
    grouped[key].push(co);
  });

  REGIONS.forEach(function(r) {
    const items = grouped[r.key].slice().sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
    const section = document.createElement('div');
    section.className = 'lib-region';
    section.id = 'lib-region-' + r.key;

    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'lib-region-header';
    header.innerHTML = '<span class="caret">▸</span>' + r.label +
      '<span class="lib-region-count">(' + items.length + ')</span>';
    header.addEventListener('click', function() { toggleRegion(r.key); });
    section.appendChild(header);

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'lib-region-items';
    items.forEach(function(co) {
      const a = document.createElement('a');
      a.href = 'https://aprovista-pov.vercel.app/' + co.slug;
      a.textContent = co.name;
      a.setAttribute('data-name', co.name);
      itemsDiv.appendChild(a);
    });
    section.appendChild(itemsDiv);
    list.appendChild(section);
  });
});

// -------------------------------------------------------------
// Language bar — translates <main> on demand via /api/translate.
// -------------------------------------------------------------
const LANGS = [
  { code: 'en', flag: '🇬🇧', title: 'English (original)' },
  { code: 'it', flag: '🇮🇹', title: 'Italiano' },
  { code: 'fr', flag: '🇫🇷', title: 'Français' },
  { code: 'de', flag: '🇩🇪', title: 'Deutsch' },
  { code: 'es', flag: '🇪🇸', title: 'Español' }
];

let ORIGINAL_MAIN_HTML = null;
let ORIGINAL_TITLE = null;
let CURRENT_LANG = 'en';

function cacheKey(slug, lang) {
  return 'aprovista:xlate:' + slug + ':' + lang;
}

function pageSlug() {
  const p = (location.pathname || '/').replace(/^\/+|\/+$/g, '').replace(/\.html$/, '');
  return p || 'index';
}

function setLangButtonState(active) {
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    if (b.dataset.lang === active) b.classList.add('active');
    else b.classList.remove('active');
  });
}

function setStatus(text) {
  const s = document.getElementById('langStatus');
  if (s) s.textContent = text || '';
}

function translationTarget() {
  return document.querySelector('[data-translate]') || document.querySelector('main');
}

async function switchLang(lang) {
  const target = translationTarget();
  if (!target || CURRENT_LANG === lang) return;

  if (lang === 'en') {
    if (ORIGINAL_MAIN_HTML !== null) target.innerHTML = ORIGINAL_MAIN_HTML;
    if (ORIGINAL_TITLE !== null) document.title = ORIGINAL_TITLE;
    CURRENT_LANG = 'en';
    setLangButtonState('en');
    setStatus('');
    document.documentElement.lang = 'en';
    return;
  }

  const slug = pageSlug();
  const cached = (function() {
    try { return localStorage.getItem(cacheKey(slug, lang)); } catch (e) { return null; }
  })();

  if (cached) {
    target.innerHTML = cached;
    CURRENT_LANG = lang;
    setLangButtonState(lang);
    document.documentElement.lang = lang;
    setStatus('');
    return;
  }

  setStatus('Translating…');
  setLangButtonState(lang);

  try {
    const resp = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ html: ORIGINAL_MAIN_HTML, lang: lang })
    });
    if (!resp.ok) {
      const errBody = await resp.json().catch(function() { return {}; });
      const msg = errBody.error || ('HTTP ' + resp.status);
      const detail = errBody.detail ? (' — ' + errBody.detail) : '';
      throw new Error(msg + detail);
    }
    const data = await resp.json();
    if (!data.html) throw new Error('empty response');

    try { localStorage.setItem(cacheKey(slug, lang), data.html); } catch (e) { /* quota — ignore */ }

    target.innerHTML = data.html;
    CURRENT_LANG = lang;
    document.documentElement.lang = lang;
    setStatus('');
  } catch (err) {
    console.error('[AproVista translate]', err);
    setStatus('Translation failed — see console');
    setLangButtonState(CURRENT_LANG);
    setTimeout(function() { setStatus(''); }, 6000);
  }
}

window.addEventListener('DOMContentLoaded', function() {
  const bannerInner = document.querySelector('.banner-inner');
  const libWrap = document.querySelector('.lib-wrap');
  const target = translationTarget();
  if (!bannerInner || !target) return;

  ORIGINAL_MAIN_HTML = target.innerHTML;
  ORIGINAL_TITLE = document.title;

  const style = document.createElement('style');
  style.textContent =
    '.lang-wrap { display: flex; align-items: center; gap: 4px; margin-right: 10px; }' +
    '.lang-btn { background: transparent; border: 1px solid transparent; border-radius: 6px;' +
    ' padding: 3px 6px; font-size: 1.1em; line-height: 1; cursor: pointer; font-family: inherit;' +
    ' opacity: .55; transition: opacity .12s, background .12s, border-color .12s; }' +
    '.lang-btn:hover { opacity: 1; background: #f0f4ff; }' +
    '.lang-btn.active { opacity: 1; border-color: #0070d2; background: #f0f4ff; }' +
    '#langStatus { font-size: .75em; color: #667; margin-left: 6px; min-height: 1em; }' +
    '@media (max-width: 640px) { .lang-btn { padding: 3px 4px; font-size: 1em; } }';
  document.head.appendChild(style);

  const wrap = document.createElement('div');
  wrap.className = 'lang-wrap';
  LANGS.forEach(function(l) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'lang-btn' + (l.code === 'en' ? ' active' : '');
    b.dataset.lang = l.code;
    b.title = l.title;
    b.setAttribute('aria-label', l.title);
    b.textContent = l.flag;
    b.addEventListener('click', function() { switchLang(l.code); });
    wrap.appendChild(b);
  });
  const status = document.createElement('span');
  status.id = 'langStatus';
  wrap.appendChild(status);

  if (libWrap) bannerInner.insertBefore(wrap, libWrap);
  else bannerInner.appendChild(wrap);
});

