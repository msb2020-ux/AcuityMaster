// AcuityMaster — main.js v4.0 (WCAG 2.2 AA)

// ── Mobile nav ───────────────────────────────────────────────────
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '\u00d7' : '\u2630';
  });
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '\u2630';
    }
  });
  // Close nav on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '\u2630';
      toggle.focus();
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

// ── Form error helper (aria-live, no alert) ──────────────────────
function showFormError(form, message) {
  let errEl = form.querySelector('.form-error-msg');
  if (!errEl) {
    errEl = document.createElement('div');
    errEl.className = 'form-error-msg';
    errEl.setAttribute('role', 'alert');
    errEl.setAttribute('aria-live', 'assertive');
    form.appendChild(errEl);
  }
  errEl.innerHTML = message + ' <a href="mailto:Mark@AcuityMaster.com" style="color:inherit;font-weight:700;">Email us directly</a>';
  errEl.focus();
}

// ── Formspree AJAX — uses each form's own action URL ─────────────
document.querySelectorAll('form[data-web3forms]').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn ? btn.textContent : '';
    if (btn) { btn.textContent = 'Sending\u2026'; btn.disabled = true; }

    // Remove any previous error
    const prev = form.querySelector('.form-error-msg');
    if (prev) prev.remove();

    const endpoint = form.getAttribute('action') || 'https://api.web3forms.com/submit';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      let data = {};
      try { data = await res.json(); } catch(_) {}

      if (data.success) {
        form.innerHTML = '<p class="form-success" role="status" aria-live="polite">\u2713 Message sent \u2014 we\u2019ll be in touch at <strong>Mark@AcuityMaster.com</strong> shortly.</p>';
      } else {
        if (btn) { btn.textContent = orig; btn.disabled = false; }
        const detail = (data.errors || []).map(err => err.message || err.field).filter(Boolean).join('; ');
        showFormError(form, detail ? 'Submission error: ' + detail + '.' : 'Submission failed — please try again.');
      }
    } catch (err) {
      if (btn) { btn.textContent = orig; btn.disabled = false; }
      showFormError(form, 'Network error — please check your connection and try again.');
    }
  });
});

// ── Feature page tabs (if present) ───────────────────────────────
(function() {
  const tabNav = document.getElementById('feat-tab-nav');
  if (!tabNav) return;
  const tabs = Array.from(tabNav.querySelectorAll('[role=tab]'));
  const panels = Array.from(document.querySelectorAll('.feat-tab-panel'));

  function activateTab(tab) {
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); t.tabIndex = -1; });
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected','true');
    tab.tabIndex = 0;
    const panelId = tab.getAttribute('data-tab');
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', e => {
      const idx = tabs.indexOf(tab);
      if (e.key === 'ArrowRight') { e.preventDefault(); activateTab(tabs[(idx+1)%tabs.length]); tabs[(idx+1)%tabs.length].focus(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); activateTab(tabs[(idx-1+tabs.length)%tabs.length]); tabs[(idx-1+tabs.length)%tabs.length].focus(); }
      if (e.key === 'Home') { e.preventDefault(); activateTab(tabs[0]); tabs[0].focus(); }
      if (e.key === 'End')  { e.preventDefault(); activateTab(tabs[tabs.length-1]); tabs[tabs.length-1].focus(); }
    });
  });
})();

// ── Carousel controls (if present) ───────────────────────────────
document.querySelectorAll('.feat-carousel').forEach(car => {
  const slides = Array.from(car.querySelectorAll('.feat-carousel-slide'));
  if (slides.length <= 1) { car.classList.add('single'); return; }
  const prev = car.querySelector('.feat-c-prev');
  const next = car.querySelector('.feat-c-next');
  const counter = car.querySelector('.feat-c-counter');
  const dotsWrap = car.querySelector('.feat-c-dots');
  let cur = 0;

  // Build dots
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'feat-c-dot' + (i===0?' active':'');
      dot.setAttribute('aria-label', 'Slide ' + (i+1) + ' of ' + slides.length);
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);
    });
  }
  const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.feat-c-dot')) : [];

  function go(n) {
    slides[cur].classList.remove('active');
    if (dots[cur]) { dots[cur].classList.remove('active'); dots[cur].setAttribute('aria-pressed','false'); }
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    if (dots[cur]) { dots[cur].classList.add('active'); dots[cur].setAttribute('aria-pressed','true'); }
    if (counter) counter.textContent = (cur+1) + ' / ' + slides.length;
    // Announce to screen readers
    const fig = slides[cur];
    const cap = fig.querySelector('figcaption');
    if (cap) { car.setAttribute('aria-label', cap.textContent.trim()); }
  }

  go(0);
  if (prev) prev.addEventListener('click', () => go(cur - 1));
  if (next) next.addEventListener('click', () => go(cur + 1));

  // Keyboard: arrow keys when carousel is focused
  car.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(cur - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1); }
  });
});

/* ── Cookie consent banner ── */
(function(){
  if (localStorage.getItem('cookie-ok')) return;
  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role','region');
  banner.setAttribute('aria-label','Cookie consent');
  banner.innerHTML = '<p style="margin:0;flex:1;">This site uses cookies to improve your experience. <a href="/privacy.html" style="color:#fff;text-decoration:underline;">Privacy policy</a></p><button id="cookie-accept" style="background:#fff;color:#1a6a9a;border:none;border-radius:6px;padding:.5rem 1.25rem;font-weight:700;cursor:pointer;white-space:nowrap;flex-shrink:0;min-height:44px;" aria-label="Accept cookies and close banner">Got it</button>';
  Object.assign(banner.style, {
    position:'fixed', bottom:'0', left:'0', right:'0', zIndex:'9999',
    background:'rgba(26,106,154,.97)', color:'#fff', padding:'.875rem 1.5rem',
    display:'flex', alignItems:'center', gap:'1.25rem', flexWrap:'wrap',
    fontSize:'.88rem', boxShadow:'0 -2px 12px rgba(0,0,0,.18)'
  });
  document.body.appendChild(banner);
  document.getElementById('cookie-accept').addEventListener('click', function(){
    localStorage.setItem('cookie-ok','1');
    banner.remove();
  });
})();
