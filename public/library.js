const LIBRARY = [
  { name: "A2A S.p.A.", slug: "a2a", region: "EMEA", score: 88 },
  { name: "Alfa Laval Corporate AB", slug: "alfa-laval", region: "EMEA", score: 88 },
  { name: "Alinta Energy", slug: "alinta-energy", region: "AMER", score: 87 },
  { name: "America First Policy Institute", slug: "america-first-policy-institute", region: "AMER", score: 22 },
  { name: "American Campus Communities Services, Inc.", slug: "american-campus-communities", region: "AMER", score: 75 },
  { name: "Architectural Graphics, Inc.", slug: "agi-architectural-graphics", region: "AMER", score: 54 },
  { name: "Ares Management Corporation", slug: "ares-management", region: "AMER", score: 86 },
  { name: "Aristocrat Leisure Limited", slug: "aristocrat", region: "AMER", score: 71 },
  { name: "AusNet Services Ltd", slug: "ausnet", region: "ANZ", score: 84 },
  { name: "Australian Unity Limited", slug: "australian-unity", region: "ANZ", score: 87 },
  { name: "Axpo Italia S.p.A.", slug: "axpo-italia", region: "EMEA", score: 91 },
  { name: "Banca Mediolanum S.p.A.", slug: "banca-mediolanum", region: "EMEA", score: 85 },
  { name: "Banca Monte dei Paschi di Siena S.p.A.", slug: "banca-monte-dei-paschi-di-siena", region: "EMEA", score: 95 },
  { name: "Bank of New York Mellon Corporation", slug: "bny-mellon", region: "AMER", score: 74 },
  { name: "Bendigo and Adelaide Bank Limited", slug: "bendigo-adelaide-bank", region: "ANZ", score: 90 },
  { name: "Black Hills Corporation", slug: "black-hills-corporation", region: "AMER", score: 86 },
  { name: "Bludigit S.p.A.", slug: "bludigit", region: "EMEA", score: 86 },
  { name: "BPER Banca S.p.A.", slug: "bper-banca", region: "EMEA", score: 89 },
  { name: "Bupa HI Pty Ltd", slug: "bupa", region: "ANZ", score: 89 },
  { name: "Cars.com Inc.", slug: "cars-commerce", region: "AMER", score: 86 },
  { name: "Cassa di Risparmio di Asti S.p.A.", slug: "cassa-di-risparmio-di-asti", region: "EMEA", score: 87 },
  { name: "CenterPoint Energy, Inc.", slug: "centerpoint-energy", region: "AMER", score: 90 },
  { name: "Chiesi Farmaceutici S.p.A.", slug: "chiesi-group-italia", region: "EMEA", score: 85 },
  { name: "Codan Limited", slug: "codan", region: "ANZ", score: 81 },
  { name: "Coles Group Limited", slug: "coles", region: "ANZ", score: 86 },
  { name: "Columbus McKinnon Corporation", slug: "columbus-mckinnon", region: "AMER", score: 84 },
  { name: "Commonwealth Bank of Australia", slug: "cba", region: "ANZ", score: 86 },
  { name: "Corteva, Inc.", slug: "corteva", region: "AMER", score: 91 },
  { name: "Costa Crociere S.p.A.", slug: "costa-crociere", region: "EMEA", score: 84 },
  { name: "Credit Corp Group Limited", slug: "credit-corp", region: "ANZ", score: 88 },
  { name: "Crown Melbourne Limited", slug: "crown-melbourne", region: "ANZ", score: 74 },
  { name: "Cuscal Limited", slug: "cuscal", region: "ANZ", score: 86 },
  { name: "CyberCX Pty Ltd", slug: "cybercx", region: "ANZ", score: 79 },
  { name: "Daimler Truck Holding AG", slug: "daimler-truck", region: "EMEA", score: 85 },
  { name: "De Agostini Editore S.p.A.", slug: "de-agostini-editore", region: "EMEA", score: 76 },
  { name: "Dell Technologies Inc.", slug: "dell-technologies", region: "AMER", score: 91 },
  { name: "DNOW Inc.", slug: "dnow", region: "AMER", score: 86 },
  { name: "Dolomiti Energia S.p.A.", slug: "dolomiti-energia", region: "EMEA", score: 85 },
  { name: "DTCC (Depository Trust & Clearing)", slug: "dtcc", region: "AMER", score: 81 },
  { name: "Duferco Energia S.p.A.", slug: "duferco-energia", region: "EMEA", score: 92 },
  { name: "Enel Global Services S.r.l.", slug: "enel-global-services", region: "EMEA", score: 85 },
  { name: "Expedia Group, Inc.", slug: "expedia-group", region: "AMER", score: 78 },
  { name: "Fabbrica D'Armi Pietro Beretta S.p.A.", slug: "beretta", region: "EMEA", score: 85 },
  { name: "FinecoBank S.p.A.", slug: "finecobank", region: "EMEA", score: 93 },
  { name: "Genpact Limited", slug: "genpact", region: "AMER", score: 54 },
  { name: "Grandi Navi Veloci S.p.A.", slug: "gnv-grandi-navi-veloci", region: "EMEA", score: 78 },
  { name: "HBF Health Limited", slug: "hbf-health", region: "ANZ", score: 89 },
  { name: "Health Communication Network Pty Limited (CGM Australia)", slug: "cgm-australia", region: "ANZ", score: 69 },
  { name: "Helsana Versicherungen AG", slug: "helsana", region: "EMEA", score: 73 },
  { name: "Hera S.p.A.", slug: "hera", region: "EMEA", score: 82 },
  { name: "Hunt MH Shared Services, LLC", slug: "hunt-companies", region: "AMER", score: 76 },
  { name: "ING Bank (Australia) Limited", slug: "ing-bank-australia", region: "ANZ", score: 95 },
  { name: "Inspira Financial Trust, LLC", slug: "inspira-financial", region: "AMER", score: 90 },
  { name: "Insurance Australia Group Limited (IAG)", slug: "iag", region: "ANZ", score: 87 },
  { name: "Jetstar Airways Pty Ltd", slug: "jetstar", region: "ANZ", score: 83 },
  { name: "JM Family Enterprises, Inc.", slug: "jm-family", region: "AMER", score: 88 },
  { name: "JPMorgan Chase & Co.", slug: "jp-morgan-chase", region: "AMER", score: 91 },
  { name: "Judo Bank Pty Limited", slug: "judo-bank", region: "ANZ", score: 89 },
  { name: "Kia Australia Pty Ltd", slug: "kia-australia", region: "ANZ", score: 85 },
  { name: "Kito Crosby Limited", slug: "kito-crosby", region: "AMER", score: 88 },
  { name: "Lucid Group, Inc.", slug: "lucid-motors", region: "AMER", score: 84 },
  { name: "Macquarie Group Limited", slug: "macquarie-group", region: "ANZ", score: 94 },
  { name: "Magis Energia S.p.A.", slug: "magis-energia", region: "EMEA", score: 86 },
  { name: "Manulife Financial Corporation", slug: "manulife", region: "AMER", score: 87 },
  { name: "Marelli Aftermarket Italy S.p.A.", slug: "marelli-aftermarket-italy", region: "EMEA", score: 88 },
  { name: "Mastercard Incorporated", slug: "mastercard", region: "AMER", score: 88 },
  { name: "Medibank Private Limited", slug: "medibank", region: "ANZ", score: 74 },
  { name: "MetLife, Inc.", slug: "metlife", region: "AMER", score: 91 },
  { name: "Microchip Technology Incorporated", slug: "microchip-technology", region: "AMER", score: 88 },
  { name: "Momentum Energy Pty Ltd", slug: "momentum-energy", region: "ANZ", score: 87 },
  { name: "Mueller Water Products, Inc.", slug: "mueller-water-products", region: "AMER", score: 78 },
  { name: "My Plan Manager Group Pty Ltd", slug: "my-plan-manager", region: "ANZ", score: 92 },
  { name: "MYOB Group Pty Ltd", slug: "myob", region: "ANZ", score: 78 },
  { name: "National Bank of Canada", slug: "national-bank-of-canada", region: "AMER", score: 87 },
  { name: "NBN Co Limited", slug: "nbn-co", region: "ANZ", score: 85 },
  { name: "Nine Entertainment Co. Holdings Limited", slug: "nine-entertainment", region: "ANZ", score: 81 },
  { name: "North East Region Water Corporation", slug: "north-east-water", region: "ANZ", score: 74 },
  { name: "Oniverse Holding S.p.A. (Calzedonia Group)", slug: "calzedonia", region: "EMEA", score: 82 },
  { name: "Optum Financial, Inc.", slug: "optum-financial", region: "AMER", score: 74 },
  { name: "Origin Energy Limited", slug: "origin-energy", region: "ANZ", score: 87 },
  { name: "Powercor Australia Ltd", slug: "powercor", region: "ANZ", score: 86 },
  { name: "Procore Technologies, Inc.", slug: "procore", region: "AMER", score: 82 },
  { name: "Public Service Enterprise Group Incorporated", slug: "pseg", region: "AMER", score: 87 },
  { name: "Puretec Group Pty Ltd", slug: "puretec", region: "ANZ", score: 67 },
  { name: "Qantas Airways Limited", slug: "qantas", region: "ANZ", score: 88 },
  { name: "QBE Insurance Group Limited", slug: "qbe", region: "ANZ", score: 92 },
  { name: "Rena-Ware International Inc", slug: "rena-ware-international", region: "AMER", score: 58 },
  { name: "Royal Automobile Club of Victoria (RACV) Ltd", slug: "racv", region: "ANZ", score: 87 },
  { name: "Safilo Group S.p.A.", slug: "safilo", region: "EMEA", score: 80 },
  { name: "South East Water Corporation", slug: "south-east-water", region: "ANZ", score: 90 },
  { name: "Stellantis Financial Services, Inc.", slug: "stellantis-financial", region: "AMER", score: 92 },
  { name: "Stellantis N.V.", slug: "stellantis", region: "AMER", score: 85 },
  { name: "Stowe Australia Pty Ltd", slug: "stowe-australia", region: "ANZ", score: 82 },
  { name: "Suncorp Group Limited", slug: "suncorp", region: "ANZ", score: 90 },
  { name: "Sycomp, A Technology Company, Inc.", slug: "sycomp", region: "AMER", score: 87 },
  { name: "Sysco Corporation", slug: "sysco", region: "AMER", score: 85 },
  { name: "TD SYNNEX Corporation", slug: "td-synnex", region: "AMER", score: 88 },
  { name: "Teachers Mutual Bank Limited", slug: "teachers-mutual-bank", region: "ANZ", score: 87 },
  { name: "The Hartford Financial Services Group, Inc.", slug: "the-hartford", region: "AMER", score: 74 },
  { name: "Think Tank Group Pty Ltd", slug: "thinktank", region: "ANZ", score: 87 },
  { name: "Toyota Motor Credit Corporation", slug: "toyota-motor-credit", region: "AMER", score: 88 },
  { name: "Trex Company, Inc.", slug: "trex", region: "AMER", score: 76 },
  { name: "TripADeal Pty Ltd", slug: "tripadeal", region: "ANZ", score: 82 },
  { name: "U.S. Bancorp", slug: "us-bank", region: "AMER", score: 91 },
  { name: "Water Corporation", slug: "water-corporation-wa", region: "ANZ", score: 81 },
  { name: "Westernport Region Water Corporation", slug: "westernport-water", region: "ANZ", score: 52 },
  { name: "Westpac Banking Corporation", slug: "westpac", region: "ANZ", score: 87 },
  { name: "Workday, Inc.", slug: "workday", region: "AMER", score: 18 },
  { name: "Workiva Inc.", slug: "workiva", region: "AMER", score: 76 },
  { name: "WSFS Financial Corporation", slug: "wsfs-financial", region: "AMER", score: 87 },
  { name: "Zip Water (Aust) Pty Ltd", slug: "zip-water", region: "ANZ", score: 83 }
];

const REGIONS = [
  { key: "AMER", label: "AMER —" },
  { key: "EMEA", label: "EMEA —" },
  { key: "ANZ",  label: "ANZ —" }
];

function scoreColorClass(score) {
  if (typeof score !== 'number') return '';
  if (score >= 80) return 'sc-green';
  if (score >= 60) return 'sc-orange';
  return 'sc-red';
}

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
    '.lib-region-items a { padding-left: 28px !important; }' +
    '.lib-list .sc { margin-left: 6px; font-weight: 600; font-variant-numeric: tabular-nums; }' +
    '.lib-list .sc-green  { color: #0f7d3e; }' +
    '.lib-list .sc-orange { color: #b45c00; }' +
    '.lib-list .sc-red    { color: #b00020; }';
  document.head.appendChild(style);

  const grouped = { AMER: [], EMEA: [], ANZ: [] };
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
      a.setAttribute('data-name', co.name);
      const label = document.createElement('span');
      label.textContent = co.name;
      a.appendChild(label);
      if (typeof co.score === 'number') {
        const s = document.createElement('span');
        s.className = 'sc ' + scoreColorClass(co.score);
        s.textContent = '(' + co.score + ')';
        a.appendChild(s);
      }
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
  { code: 'en', flag: '🇬🇧', title: 'English',   enabled: true },
  { code: 'it', flag: '🇮🇹', title: 'Italiano',  enabled: true }
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
    const msg = (err && err.message) ? String(err.message) : 'translation error';
    setStatus('Translation failed: ' + msg);
    setLangButtonState(CURRENT_LANG);
    setTimeout(function() { setStatus(''); }, 15000);
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
    ' transition: background .12s, border-color .12s; }' +
    '.lang-btn:hover { background: #f0f4ff; }' +
    '.lang-btn.active { border-color: #0070d2; background: #f0f4ff; }' +
    '#langStatus { font-size: .78em; color: #b00020; margin-left: 8px;' +
    ' min-height: 1em; max-width: 480px; white-space: normal; line-height: 1.3; }' +
    '@media (max-width: 640px) { .lang-btn { padding: 3px 4px; font-size: 1em; } }' +
    '.fine { font-size: .88em !important; color: #888 !important; }' +
    '.fine a { color: #888 !important; }';
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
    if (l.enabled) {
      b.addEventListener('click', function() { switchLang(l.code); });
    }
    wrap.appendChild(b);
  });
  const status = document.createElement('span');
  status.id = 'langStatus';
  wrap.appendChild(status);

  if (libWrap) bannerInner.insertBefore(wrap, libWrap);
  else bannerInner.appendChild(wrap);
});

