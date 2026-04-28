// AcuityMaster — main.js v3.1

// ── Mobile nav ───────────────────────────────────────────────────
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '\u2715' : '\u2630';
  });
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '\u2630';
    }
  });
}

// ── Scroll reveal ────────────────────────────────────────────────
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ── Formspree forms — uses each form's own action URL ────────────
document.querySelectorAll('form[data-formspree]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn ? btn.textContent : '';
    if (btn) { btn.textContent = 'Sending\u2026'; btn.disabled = true; }
    // Use the form's action attribute, fall back to default endpoint
    const endpoint = form.getAttribute('action') || 'https://formspree.io/f/xpzgndvk';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.innerHTML = '<p class="form-success">\u2713 Message sent \u2014 we\'ll be in touch at <strong>Mark@AcuityMaster.com</strong> shortly.</p>';
      } else throw new Error();
    } catch {
      if (btn) { btn.textContent = orig; btn.disabled = false; }
      alert('Something went wrong. Please email Mark@AcuityMaster.com directly.');
    }
  });
});
