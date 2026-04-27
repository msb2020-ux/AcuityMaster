# acuitymasters.com

Static marketing site for AcuityMaster digital visual acuity software.

Stack: pure HTML/CSS/JS, hosted on Cloudflare Pages, deployed from GitHub.

## Local preview

Just open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Before going live: three things you need to set up

### 1. Three Formspree forms

The site uses three forms, each with its own Formspree endpoint. Create each one (free tier — 50 submissions/month per form is fine to start) at https://formspree.io and replace the placeholder IDs:

| File           | Placeholder           | What it sends      |
|----------------|-----------------------|--------------------|
| `trial.html`   | `yourDemoFormID`      | Trial requests     |
| `contact.html` | `yourContactFormID`   | Contact form       |
| `buy.html`     | `yourBuyFormID`       | Purchase inquiries |

Search the codebase for `yourDemoFormID`, `yourContactFormID`, and `yourBuyFormID` and replace each with your real Formspree form ID.

For the trial form (email-gated download), Formspree's auto-reply feature should be configured to send the visitor a confirmation that includes the download link:

```
https://acuitymaster.com/DemoSoftware/AMsetup.exe
```

(Settings -> Email templates -> Auto-respond, in your Formspree dashboard.)

### 2. Update the email address

The site references `mark@acuitymasters.com` in a few places. Search/replace if you'd prefer a different address.

### 3. Logo / brand mark

Right now the brand mark is a simple inline SVG circle with an italic "E" inside, matching the eye-chart aesthetic. If you want to drop in the original `Finall.png` logo, save it to `/assets/img/logo.png` and update the `.brand` element in each page's header.

## Deployment

Same flow as your other sites:

1. Create a new GitHub repo (e.g. `msb2020-ux/acuitymasters`)
2. Push the contents of this folder to `main`
3. In Cloudflare Pages: **Create project -> Connect to Git -> select repo**
4. Build settings: leave **Build command** blank, set **Output directory** to `/` (or leave blank — root is fine)
5. After first deploy, add custom domain `acuitymasters.com` in the Pages project settings; Cloudflare will walk you through DNS

The `_redirects` file at the root preserves the old WordPress URL paths so any inbound links still work.

## File structure

```
.
├── index.html              # Home
├── features.html           # Features
├── requirements.html       # Requirements
├── accessories.html        # Accessories
├── faq.html                # FAQ
├── trial.html              # Free trial (email-gated download)
├── contact.html            # Contact form
├── buy.html                # Pricing + purchase inquiry
├── help.html               # Manual & PDF downloads
├── 404.html                # Not found
├── _redirects              # Cloudflare Pages redirects (old WP URLs)
├── assets/
│   ├── css/style.css       # All styles
│   ├── js/main.js          # Mobile nav + form handler + scroll reveal
│   └── img/
│       └── favicon.svg
└── README.md
```

## Notes on choices

- **Email-gated download** (trial.html): the page hides the actual download link until the visitor submits the form. Formspree's auto-reply emails the same link to their inbox. This captures every lead.
- **Honeypot anti-spam**: each form has a hidden `_gotcha` field that bots fill out and humans don't.
- **No build step**: pure static HTML so anyone can edit a page and push.
- **Fonts**: Fraunces (display serif) + Inter (body sans), loaded from Google Fonts with `display=swap`.
- **Color palette**: deep navy + warm paper white + optical-cyan accent. CSS variables in `style.css` if you want to retheme.
- **Old PDFs**: the Help page links to PDFs still hosted at `acuitymaster.com/wp-content/...`. If you decommission the WordPress host, copy those PDFs into `/assets/pdf/` and update the links.
- **Demo installer**: similarly, `AMsetup.exe` is currently served from the old WordPress host at `acuitymaster.com/DemoSoftware/`. Move it into the new repo (or to Cloudflare R2) before shutting down hosting.com.
