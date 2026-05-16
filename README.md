# GTM Stacks — Landing Page

Static marketing site for **GTM Stacks**, a productized vertical of Greenville IT Consulting LLC. Single page, no backend, deployable to GitHub Pages as-is.

## Files

```
.
├── index.html      # Page markup
├── style.css       # All styles (dark theme, green palette)
├── script.js       # ~20 lines: footer year + active-section nav highlight
├── favicon.svg
├── CONTENT.md      # Every piece of copy on the page, editable as plain text
└── README.md       # This file
```

No build step. No dependencies. Just static files.

## Deploy to GitHub Pages

1. Create a new repo (e.g. `gtm-stacks-site`) and push these files to the `main` branch.
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`
4. Save. The first deploy takes ~1 minute. GitHub will show the live URL at the top of the Pages settings.

### Custom domain (optional)

1. Add a `CNAME` file at the repo root containing your domain on one line, e.g. `gtmstacks.com`.
2. At your DNS provider, create either:
   - A **CNAME** record for `www` pointing to `<username>.github.io`, **or**
   - Four **A** records for the apex pointing to GitHub's IPs (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Back in **Settings → Pages**, set the custom domain and check **Enforce HTTPS** once the cert provisions.

## Things to fill in before going live

Search the codebase for `TODO`-equivalent placeholders:

| Where | What to replace |
| --- | --- |
| `index.html` `<meta property="og:url">` | Final public URL |
| `index.html` `<meta property="og:image">` | Path to a 1200×630 social card PNG you provide |
| `index.html` analytics comment block | Your Plausible domain or GA snippet |
| `index.html` two `href="#"` links in the final CTA section | Calendly / mailto / Typeform URL |
| Header "Book a call" button (`href="#contact"`) | Optional: point directly to your booking link instead |

`data-cta="primary"` and `data-cta="email"` attributes are already on the final-CTA links so you can attach analytics events without re-editing markup.

## Editing copy

All page copy is mirrored in `CONTENT.md`. Edit there if you prefer plain text, then port changes into `index.html`. The structure is 1:1.

## Local preview

Any static server works:

```bash
# Python
python3 -m http.server 8080

# Node (if you have npx)
npx serve .
```

Open `http://localhost:8080`.

## Accessibility & performance notes

- Single Google Fonts request (Inter), preconnected.
- No JS frameworks. ~20 lines of vanilla JS.
- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<nav aria-label>`, `<section id>` for every anchor.
- Skip link, visible focus rings, `prefers-reduced-motion` respected.
- All decorative SVGs marked `aria-hidden`.

Expected Lighthouse: 95+ across Performance, Accessibility, Best Practices, SEO on a clean deploy. If Performance dips, the most likely culprit is the OG image — keep it under ~200 KB.

## Color palette

| Token | Hex | Use |
| --- | --- | --- |
| `--green-100` | `#A3EBB1` | Highlights, gradient stops, kicker text |
| `--green-500` | `#18A558` | Primary buttons, accents, gradient mid |
| `--green-700` | `#116530` | Depth, gradient ends |
| `--bg` | `#0a1110` | Page background (dark mode, committed) |
