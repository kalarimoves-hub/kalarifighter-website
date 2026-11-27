# Rules for AI assistants editing this website

This is the website for Kalari Fighter (kalarifighter.com), Krishna's Kalaripayattu classes in Calgary.
Krishna is not a programmer. He asks for changes in plain words. Keep every change small, safe and easy to undo.

## How the site works
- Everything the public sees is in `site/`:
  - `site/index.html`: all the text and sections (one page).
  - `site/css/styles.css`: colours, fonts and layout. Colours are set once in `:root` at the top.
  - `site/js/main.js`: the phone menu, the contact form and the gallery viewer.
  - `site/images/`: pictures.
- There is no build step and no framework. Plain HTML, CSS and JavaScript only.
- When a change is merged into `main`, GitHub Pages publishes it within a few minutes (`.github/workflows/pages.yml`).
- Before launch, kalarifighter.com shows the page in `coming-soon/`, and the full site is at kalarifighter.com/preview/
  (hidden from Google). At launch, `LAUNCHED` in the workflow is set to "yes" and kalarifighter.com shows `site/`.
  Do not change `coming-soon/` or `LAUNCHED` unless asked.
- Every pull request gets a preview link from Cloudflare Pages, so Krishna can check it before merging.

## Rules
1. Always work on a new branch and open a pull request. Never commit directly to `main`.
2. Change only what was asked. Do not reformat, reorder or "tidy" other parts of the files.
3. Do not add frameworks, build tools, npm packages, trackers or external scripts.
4. Do not change `.github/workflows/pages.yml`.
5. The contact form: keep `action="https://api.web3forms.com/submit"` and the hidden `access_key` input exactly as they are.
   Messages go to Krishna's email through Web3Forms.
6. Prices are in Canadian dollars. When a price changes, update BOTH the price per class and the total
   (total = number of classes x price per class), in every table that changes.
7. If the business details change (phone, email, address, social links), update them in BOTH places:
   the Contact section and the `application/ld+json` block in the `<head>`.
8. Every image needs a short `alt` text that says what the picture shows.
9. New images: put them in `site/images/`, use lowercase names with dashes (e.g. `class-group-photo.jpg`),
   and keep each file under 300 KB (about 1600 px wide is plenty).
10. Keep the site working on phones. The phone layout rules are at the bottom of `styles.css` (`max-width: 700px`).
11. Customer text: plain, simple sentences. No hype.
12. In the pull request description, list in plain words what changed, so Krishna can check it on the preview.

## Common requests
- Change text: edit it in `site/index.html`.
- Change a price: edit the table under `<!-- ============ PRICING`.
- Add a gallery photo: add the file to `site/images/` and copy one `<a>` line in the Gallery section.
- Change a colour: edit the variable in `:root` at the top of `site/css/styles.css`.
