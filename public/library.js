const LIBRARY = [
  { name: "Architectural Graphics, Inc.", slug: "agi-architectural-graphics" },
  { name: "Alfa Laval Corporate AB", slug: "alfa-laval" },
  { name: "Ares Management Corporation", slug: "ares-management" },
  { name: "Bank of New York Mellon Corporation", slug: "bny-mellon" },
  { name: "Black Hills Corporation", slug: "black-hills-corporation" },
  { name: "Corteva, Inc.", slug: "corteva" },
  { name: "DTCC (Depository Trust & Clearing)", slug: "dtcc" },
  { name: "DNOW Inc.", slug: "dnow" },
  { name: "Expedia Group, Inc.", slug: "expedia-group" },
  { name: "Australian Unity Limited", slug: "australian-unity" },
  { name: "CenterPoint Energy, Inc.", slug: "centerpoint-energy" },
  { name: "Daimler Truck Holding AG", slug: "daimler-truck" },
  { name: "Dell Technologies Inc.", slug: "dell-technologies" },
  { name: "Genpact Limited", slug: "genpact" },
  { name: "Inspira Financial Trust, LLC", slug: "inspira-financial" },
  { name: "JPMorgan Chase & Co.", slug: "jp-morgan-chase" },
  { name: "Macquarie Group Limited", slug: "macquarie-group" },
  { name: "Manulife Financial Corporation", slug: "manulife" },
  { name: "Mastercard Incorporated", slug: "mastercard" },
  { name: "MetLife, Inc.", slug: "metlife" },
  { name: "National Bank of Canada", slug: "national-bank-of-canada" },
  { name: "Optum Financial, Inc.", slug: "optum-financial" },
  { name: "Stellantis Financial Services, Inc.", slug: "stellantis-financial" },
  { name: "Sysco Corporation", slug: "sysco" },
  { name: "The Hartford Financial Services Group, Inc.", slug: "the-hartford" },
  { name: "U.S. Bancorp", slug: "us-bank" },
  { name: "Westpac Banking Corporation", slug: "westpac" },
  { name: "Workday, Inc.", slug: "workday" },
  { name: "WSFS Financial Corporation", slug: "wsfs-financial" }
];

function toggleLib() {
  const menu = document.getElementById('libMenu');
  if (menu) menu.classList.toggle('open');
}

window.addEventListener('click', function(e) {
  if (!e.target.closest('.lib-wrap')) {
    const menu = document.getElementById('libMenu');
    if (menu) menu.classList.remove('open');
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('libMenu');
  if (!menu) return;
  LIBRARY.forEach(function(co) {
    const a = document.createElement('a');
    a.href = 'https://aprovista-pov.vercel.app/' + co.slug;
    a.textContent = co.name;
    menu.appendChild(a);
  });
});
