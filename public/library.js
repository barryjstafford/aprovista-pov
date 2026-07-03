const LIBRARY = [
  { name: "Architectural Graphics, Inc.", slug: "agi-architectural-graphics" },
  { name: "Alfa Laval Corporate AB", slug: "alfa-laval" },
  { name: "Ares Management Corporation", slug: "ares-management" },
  { name: "Australian Unity Limited", slug: "australian-unity" },
  { name: "Bank of New York Mellon Corporation", slug: "bny-mellon" },
  { name: "Black Hills Corporation", slug: "black-hills-corporation" },
  { name: "Cars.com Inc.", slug: "cars-commerce" },
  { name: "CenterPoint Energy, Inc.", slug: "centerpoint-energy" },
  { name: "Columbus McKinnon Corporation", slug: "columbus-mckinnon" },
  { name: "Corteva, Inc.", slug: "corteva" },
  { name: "Daimler Truck Holding AG", slug: "daimler-truck" },
  { name: "Dell Technologies Inc.", slug: "dell-technologies" },
  { name: "DNOW Inc.", slug: "dnow" },
  { name: "DTCC (Depository Trust & Clearing)", slug: "dtcc" },
  { name: "Expedia Group, Inc.", slug: "expedia-group" },
  { name: "Genpact Limited", slug: "genpact" },
  { name: "Inspira Financial Trust, LLC", slug: "inspira-financial" },
  { name: "JM Family Enterprises, Inc.", slug: "jm-family" },
  { name: "JPMorgan Chase & Co.", slug: "jp-morgan-chase" },
  { name: "Kito Crosby Limited", slug: "kito-crosby" },
  { name: "Lucid Group, Inc.", slug: "lucid-motors" },
  { name: "Macquarie Group Limited", slug: "macquarie-group" },
  { name: "Manulife Financial Corporation", slug: "manulife" },
  { name: "Mastercard Incorporated", slug: "mastercard" },
  { name: "MetLife, Inc.", slug: "metlife" },
  { name: "Mueller Water Products, Inc.", slug: "mueller-water-products" },
  { name: "National Bank of Canada", slug: "national-bank-of-canada" },
  { name: "Optum Financial, Inc.", slug: "optum-financial" },
  { name: "Stellantis Financial Services, Inc.", slug: "stellantis-financial" },
  { name: "Sysco Corporation", slug: "sysco" },
  { name: "The Hartford Financial Services Group, Inc.", slug: "the-hartford" },
  { name: "Trex Company, Inc.", slug: "trex" },
  { name: "U.S. Bancorp", slug: "us-bank" },
  { name: "Westpac Banking Corporation", slug: "westpac" },
  { name: "Workday, Inc.", slug: "workday" },
  { name: "WSFS Financial Corporation", slug: "wsfs-financial" }
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

function filterLib(q) {
  const needle = (q || '').trim().toLowerCase();
  const list = document.getElementById('libList');
  if (!list) return;
  const links = list.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    const name = links[i].getAttribute('data-name') || links[i].textContent;
    if (!needle || name.toLowerCase().indexOf(needle) !== -1) {
      links[i].classList.remove('hidden');
    } else {
      links[i].classList.add('hidden');
    }
  }
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
  LIBRARY.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  }).forEach(function(co) {
    const a = document.createElement('a');
    a.href = 'https://aprovista-pov.vercel.app/' + co.slug;
    a.textContent = co.name;
    a.setAttribute('data-name', co.name);
    list.appendChild(a);
  });
});
