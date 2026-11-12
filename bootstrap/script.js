// Dark mode: Bootstrap-ийн data-bs-theme атрибут
const root = document.documentElement;
const btn = document.getElementById('theme');
function applyTheme(t) {
  root.setAttribute('data-bs-theme', t);
  btn.setAttribute('aria-pressed', String(t === 'dark'));
  btn.textContent = t === 'dark' ? 'Өдрийн горим' : 'Шөнийн горим';
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
btn.addEventListener('click', () => {
  const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Form validation: Bootstrap-ийн was-validated класс
document.querySelectorAll('.needs-validation').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) alert('Амжилттай илгээгдлээ!');
    form.classList.add('was-validated');
  });
});
