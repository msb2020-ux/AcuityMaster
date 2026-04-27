/* =========================================================
   AcuityMaster — global styles
   ========================================================= */

:root {
  --navy: #0c2340;
  --navy-2: #14305a;
  --ink: #111827;
  --paper: #fbfaf6;
  --paper-2: #f3f0e8;
  --line: #e6e1d4;
  --muted: #5b6675;
  --accent: #00a3a3;     /* optical cyan */
  --accent-2: #d97706;   /* warm signal */
  --max: 1180px;
  --radius: 4px;
  --shadow-sm: 0 1px 2px rgba(12,35,64,.06);
  --shadow-md: 0 8px 24px rgba(12,35,64,.08);
  --shadow-lg: 0 20px 60px rgba(12,35,64,.12);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink);
  background: var(--paper);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 {
  font-family: "Fraunces", "Georgia", serif;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--navy);
  margin: 0 0 .5em;
}

h1 { font-size: clamp(2rem, 4.5vw, 3.5rem); line-height: 1.1; }
h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.15; }
h3 { font-size: 1.25rem; line-height: 1.3; }

p { margin: 0 0 1em; }

a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color .2s, color .2s;
}
a:hover { border-bottom-color: var(--accent); }

.container {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   Header / nav
   ========================================================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 250, 246, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.5rem;
  max-width: var(--max);
  margin: 0 auto;
}

.brand {
  font-family: "Fraunces", Georgia, serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--navy);
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: .55rem;
  border: none;
}
.brand:hover { border: none; }
.brand-mark {
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: 1.5px solid var(--navy);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-family: "Fraunces", serif;
  font-size: .9rem;
  font-weight: 600;
  font-style: italic;
}
.brand-mark::before { content: "E"; }

.nav-links {
  display: flex;
  gap: 1.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}
.nav-links a {
  color: var(--ink);
  font-size: .92rem;
  font-weight: 500;
  letter-spacing: .01em;
  border: none;
  padding: .25rem 0;
  position: relative;
}
.nav-links a:hover { color: var(--navy); border: none; }
.nav-links a.active { color: var(--navy); }
.nav-links a.active::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: -4px;
  height: 2px;
  background: var(--accent);
}
.nav-links .cta {
  background: var(--navy);
  color: var(--paper);
  padding: .55rem 1rem;
  border-radius: var(--radius);
}
.nav-links .cta:hover { background: var(--navy-2); color: var(--paper); }

.menu-toggle {
  display: none;
  background: none;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: .5rem .75rem;
  cursor: pointer;
  font-size: 1.1rem;
}

@media (max-width: 880px) {
  .menu-toggle { display: block; }
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    background: var(--paper);
    flex-direction: column;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--line);
    gap: .25rem;
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: .65rem 0; width: 100%; }
  .nav-links .cta { margin-top: .5rem; text-align: center; }
}

/* =========================================================
   Buttons
   ========================================================= */

.btn {
  display: inline-block;
  padding: .85rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 500;
  font-size: .95rem;
  letter-spacing: .02em;
  cursor: pointer;
  transition: transform .15s, box-shadow .15s, background .2s;
  border: 1px solid transparent;
}
.btn-primary {
  background: var(--navy);
  color: var(--paper);
  border: none;
}
.btn-primary:hover {
  background: var(--navy-2);
  color: var(--paper);
  border-bottom-color: transparent;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.btn-secondary {
  background: transparent;
  color: var(--navy);
  border: 1px solid var(--navy);
}
.btn-secondary:hover {
  background: var(--navy);
  color: var(--paper);
  border-bottom-color: var(--navy);
}
.btn-accent {
  background: var(--accent);
  color: white;
  border: none;
}
.btn-accent:hover { background: #008888; color: white; border-bottom-color: transparent; }

/* =========================================================
   Hero (homepage)
   ========================================================= */

.hero {
  position: relative;
  padding: clamp(3rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem);
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(0,163,163,.06), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(12,35,64,.05), transparent 50%);
  pointer-events: none;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 3rem;
  align-items: center;
  position: relative;
}
.hero-eyebrow {
  display: inline-block;
  font-size: .8rem;
  font-weight: 500;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.5rem;
}
.hero h1 {
  margin-bottom: 1.25rem;
}
.hero h1 em {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}
.hero-lead {
  font-size: 1.15rem;
  color: var(--muted);
  margin-bottom: 2rem;
  max-width: 38ch;
}
.hero-actions {
  display: flex;
  gap: .8rem;
  flex-wrap: wrap;
}
.hero-visual {
  position: relative;
  aspect-ratio: 1 / 1;
  background: var(--paper-2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

/* SVG eye chart visual */
.eye-chart-svg {
  width: 80%;
  height: auto;
}

@media (max-width: 880px) {
  .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
  .hero-visual { max-width: 420px; margin: 0 auto; }
}

/* =========================================================
   Sections
   ========================================================= */

section { padding: clamp(3rem, 6vw, 5rem) 0; }

.section-eyebrow {
  font-size: .8rem;
  font-weight: 500;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}
.section-title {
  max-width: 36ch;
  margin-bottom: 2rem;
}
.section-intro {
  max-width: 60ch;
  color: var(--muted);
  font-size: 1.05rem;
  margin-bottom: 3rem;
}

.bg-paper-2 { background: var(--paper-2); }
.bg-navy { background: var(--navy); color: var(--paper); }
.bg-navy h1, .bg-navy h2, .bg-navy h3 { color: var(--paper); }
.bg-navy a { color: #7dd3fc; }

/* =========================================================
   Feature grid (homepage benefits)
   ========================================================= */

.benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.benefit {
  padding: 2rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 6px;
  transition: transform .2s, box-shadow .2s;
}
.benefit:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.benefit-num {
  font-family: "Fraunces", serif;
  font-size: 2rem;
  font-style: italic;
  color: var(--accent);
  display: block;
  margin-bottom: .5rem;
  line-height: 1;
}
.benefit h3 { margin-bottom: .5rem; }
.benefit p { color: var(--muted); margin: 0; font-size: .95rem; }

@media (max-width: 760px) {
  .benefits { grid-template-columns: 1fr; gap: 1rem; }
}

/* =========================================================
   Testimonials
   ========================================================= */

.testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.testimonial {
  background: var(--paper);
  border-left: 3px solid var(--accent);
  padding: 1.75rem;
  border-radius: 0 var(--radius) var(--radius) 0;
}
.testimonial blockquote {
  margin: 0 0 1rem;
  font-family: "Fraunces", serif;
  font-size: 1.1rem;
  line-height: 1.4;
  color: var(--ink);
  font-style: italic;
}
.testimonial cite {
  font-style: normal;
  font-size: .85rem;
  color: var(--muted);
}
.testimonial cite strong { color: var(--navy); display: block; font-size: .95rem; }

@media (max-width: 880px) {
  .testimonials { grid-template-columns: 1fr; }
}

/* =========================================================
   CTA strip
   ========================================================= */

.cta-strip {
  padding: 4rem 0;
  text-align: center;
}
.cta-strip h2 { color: var(--paper); }
.cta-strip p { color: rgba(255,255,255,.75); max-width: 50ch; margin: 0 auto 2rem; }

/* =========================================================
   Inner page hero
   ========================================================= */

.page-hero {
  padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(1.5rem, 3vw, 2.5rem);
  border-bottom: 1px solid var(--line);
}
.page-hero h1 { margin-bottom: .5rem; }
.page-hero .lead { color: var(--muted); max-width: 60ch; margin: 0; }

/* =========================================================
   Content blocks
   ========================================================= */

.content {
  max-width: 720px;
  margin: 0 auto;
}
.content h2 { margin-top: 2.5rem; }
.content h3 { margin-top: 1.75rem; }
.content ul, .content ol { padding-left: 1.25rem; }
.content li { margin-bottom: .5rem; }

/* Two-col layout for feature page sections */
.feature-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--line);
}
.feature-block:last-child { border-bottom: none; }
.feature-block-text h2 { margin-top: 0; }
.feature-block-visual {
  background: var(--paper-2);
  border-radius: 6px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  box-shadow: var(--shadow-sm);
}
.feature-block-visual img,
.feature-block-visual svg {
  max-width: 100%;
  height: auto;
}

@media (max-width: 760px) {
  .feature-block { grid-template-columns: 1fr; gap: 1.5rem; padding: 2rem 0; }
}

/* =========================================================
   FAQ accordion
   ========================================================= */

.faq-list { max-width: 800px; margin: 0 auto; }
.faq-item {
  border-bottom: 1px solid var(--line);
  padding: 1.25rem 0;
}
.faq-q {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  font-family: "Fraunces", serif;
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--navy);
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  padding: 0;
}
.faq-q::after {
  content: "+";
  flex-shrink: 0;
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--accent);
  transition: transform .2s;
}
.faq-item[open] .faq-q::after { content: "−"; }
.faq-a {
  margin-top: .75rem;
  color: var(--muted);
  font-size: .98rem;
}
.faq-a ul { padding-left: 1.25rem; margin: .5rem 0; }

/* =========================================================
   Pricing
   ========================================================= */

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto 3rem;
}
.price-card {
  padding: 2rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 6px;
}
.price-card.featured {
  border: 2px solid var(--navy);
  background: var(--paper);
  position: relative;
}
.price-card.featured::before {
  content: "Initial license";
  position: absolute;
  top: -10px;
  left: 1.5rem;
  background: var(--navy);
  color: var(--paper);
  padding: .15rem .6rem;
  border-radius: 100px;
  font-size: .7rem;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.price-card h3 { margin-bottom: .25rem; }
.price-card .price {
  font-family: "Fraunces", serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--navy);
  display: block;
  margin: .5rem 0;
}
.price-card .price-note {
  color: var(--muted);
  font-size: .9rem;
  margin-bottom: 1rem;
}
.price-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  font-size: .92rem;
}
.price-card li {
  padding: .35rem 0;
  border-top: 1px solid var(--line);
}
.price-card li:first-child { border-top: none; }

@media (max-width: 760px) {
  .pricing-grid { grid-template-columns: 1fr; }
}

/* =========================================================
   Forms
   ========================================================= */

.form {
  max-width: 540px;
  margin: 0;
}
.form-row {
  margin-bottom: 1.25rem;
}
.form label {
  display: block;
  font-size: .85rem;
  font-weight: 500;
  letter-spacing: .03em;
  text-transform: uppercase;
  color: var(--navy);
  margin-bottom: .4rem;
}
.form input,
.form textarea,
.form select {
  width: 100%;
  padding: .75rem .9rem;
  font: inherit;
  font-size: 1rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink);
  transition: border-color .15s, box-shadow .15s;
}
.form input:focus,
.form textarea:focus,
.form select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(0,163,163,.15);
}
.form textarea { resize: vertical; min-height: 120px; }
.form-note { font-size: .85rem; color: var(--muted); margin-top: 1rem; }

.form-success {
  background: #e7f7f4;
  border: 1px solid #b6dfd5;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.form-success h3 { color: #0a6b5e; margin-bottom: .5rem; }
.form-success p { color: #0a6b5e; margin: 0; }

/* Two-col layout for contact / buy pages */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.split-info h2 { margin-top: 0; }
.contact-info {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  font-size: .98rem;
  line-height: 1.8;
}
.contact-info strong {
  display: block;
  font-size: .8rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: .15rem;
}

@media (max-width: 880px) {
  .split { grid-template-columns: 1fr; gap: 2rem; }
}

/* =========================================================
   Footer
   ========================================================= */

.site-footer {
  background: var(--navy);
  color: rgba(255,255,255,.7);
  padding: 3rem 0 2rem;
  font-size: .9rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}
.footer-grid h4 {
  color: var(--paper);
  font-family: "Inter", sans-serif;
  font-size: .8rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 1rem;
}
.site-footer a { color: rgba(255,255,255,.85); border: none; }
.site-footer a:hover { color: white; border: none; }
.site-footer ul { list-style: none; padding: 0; margin: 0; }
.site-footer li { margin-bottom: .5rem; }
.site-footer .brand-mark { border-color: rgba(255,255,255,.4); }
.site-footer .brand { color: var(--paper); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.12);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: .8rem;
  color: rgba(255,255,255,.55);
}

@media (max-width: 760px) {
  .footer-grid { grid-template-columns: 1fr; gap: 1.5rem; }
}

/* =========================================================
   Utility
   ========================================================= */

.text-center { text-align: center; }
.mt-0 { margin-top: 0; }
.mb-0 { margin-bottom: 0; }

/* Reveal on scroll */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .7s ease, transform .7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}

/* Hidden by default for JS toggle */
.hidden { display: none !important; }
