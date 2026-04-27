// AcuityMaster — main.js v3.0

// ── Mobile nav ───────────────────────────────────────────────────
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '✕' : '☰';
  });
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
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

// ── Pricing toggle (buy page) ────────────────────────────────────
const billingToggle = document.getElementById('billing-toggle');
if (billingToggle) {
  const prices = {
    monthly: { solo: 29, practice: 79, enterprise: 149 },
    annual:  { solo: 249, practice: 679, enterprise: 1279 }
  };
  const periods = { monthly: '/month', annual: '/year' };

  function updatePricing(isAnnual) {
    const p = isAnnual ? prices.annual : prices.monthly;
    const period = isAnnual ? periods.annual : periods.monthly;
    document.querySelectorAll('[data-tier]').forEach(card => {
      const tier = card.dataset.tier;
      const valEl = card.querySelector('.pricing-price-value');
      const perEl = card.querySelector('.pricing-period');
      if (valEl && p[tier] !== undefined) valEl.textContent = p[tier];
      if (perEl) perEl.textContent = period;
    });
    document.querySelectorAll('.annual-savings').forEach(el => {
      el.style.display = isAnnual ? 'inline' : 'none';
    });
  }

  billingToggle.addEventListener('change', () => updatePricing(billingToggle.checked));
}

// ── Contact / trial form ─────────────────────────────────────────
document.querySelectorAll('form[data-formspree]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn ? btn.textContent : '';
    if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
    try {
      const res = await fetch('https://formspree.io/f/xpzgndvk', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.innerHTML = '<p class="form-success">✓ Message sent — we\'ll reply to <strong>Mark@AcuityMaster.com</strong> shortly.</p>';
      } else throw new Error();
    } catch {
      if (btn) { btn.textContent = orig; btn.disabled = false; }
      alert('Something went wrong. Please email Mark@AcuityMaster.com directly.');
    }
  });
});
