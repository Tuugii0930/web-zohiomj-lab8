// Dark mode: html дээр data-theme атрибут (input.css-ийн @custom-variant-тай тохирно)
const root = document.documentElement;
const btn = document.getElementById('theme');
function applyTheme(t) {
  root.dataset.theme = t;
  btn.setAttribute('aria-pressed', String(t === 'dark'));
  btn.textContent = t === 'dark' ? 'Өдрийн горим' : 'Шөнийн горим';
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
btn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Мобайл цэс
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  menu.classList.toggle('flex', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});

// Form validation: буруу талбарт data-invalid тавина (CSS нь data-[invalid]: variant-аар харуулна)
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll('input, select').forEach((el) => {
    const bad = !el.checkValidity();
    el.toggleAttribute('data-invalid', bad);
    if (bad) ok = false;
  });
  if (ok) alert('Амжилттай илгээгдлээ!');
});
form.addEventListener('input', (e) => {
  if (e.target.checkValidity()) e.target.removeAttribute('data-invalid');
});
