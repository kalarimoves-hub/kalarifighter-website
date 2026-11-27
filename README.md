# Kalari Fighter website

The website for kalarifighter.com. The files the public sees are in `site/`.

- **Live site:** https://kalarifighter.com (GitHub Pages, publishes automatically when `main` changes)
- **Before launch:** kalarifighter.com shows a coming soon page (`coming-soon/`); the full site is at
  https://kalarifighter.com/preview/. To launch, set `LAUNCHED: "yes"` in `.github/workflows/pages.yml`.
- **Previews:** every pull request gets a Cloudflare Pages preview link
- **Contact form:** Web3Forms emails each message to hello@kalarifighter.com
- **Email:** hello@kalarifighter.com is a Hostinger mailbox

## Making a change (Krishna)
1. Ask ChatGPT for the change. It opens a pull request on GitHub.
2. Open the pull request and click the Cloudflare preview link. Check the change on your phone too.
3. Happy with it: click **Merge pull request**. The live site updates in a few minutes.
   Not happy: click **Close pull request**. Nothing changes.

## Undo a change
1. On GitHub, open **Pull requests** > **Closed**, and open the change you want to undo.
2. Click **Revert**, then **Create pull request**, then **Merge pull request**.
3. The site goes back to how it was before that change, within a few minutes.

## Rules for ChatGPT
See `AGENTS.md`.
