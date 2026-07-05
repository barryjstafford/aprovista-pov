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
