const LIBRARY = [
  { name: "United States Department of Defense", slug: "us-department-of-defense" },
  { name: "JPMorgan Chase & Co.", slug: "jp-morgan-chase" }
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
