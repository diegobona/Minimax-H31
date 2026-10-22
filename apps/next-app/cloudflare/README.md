# Cloudflare deployment

The five published product pages are exported with Next.js and hosted by the `minimax-h31` Worker using Workers Static Assets. The source Next.js app and its existing SaaS infrastructure stay available for future backend integration. The current generator prepares briefs locally, as indicated in the interface.

Run from the repository root with the existing dependencies and an authenticated Wrangler installation:

```powershell
node apps/next-app/cloudflare/deploy.mjs
```

This builds and typechecks the published pages in the ignored `.tmp/cloudflare-site` workspace and deploys its `out` directory. The export contains rendered HTML, FAQ JSON-LD, client navigation payloads, styles, scripts, local fonts, and public images. No local environment files or SQLite database are included. Example prompt selection uses the browser's query parameters and works on the exported site.

Production domains: `https://minimax-h31.com` and `https://www.minimax-h31.com`; both are retained as custom domains in `wrangler.jsonc`. Page canonical URLs use `https://minimax-h31.com`.
Workers fallback: `https://minimax-h31.zw83716.workers.dev`.

After changing release tracking content, run the deployment command again so the production page, FAQ, metadata, and sitemap receive the same checked date. The daily monitoring task must verify the official sources first.

Optional live browser check using the installed Chrome:

```powershell
node apps/next-app/cloudflare/verify.mjs https://minimax-h31.zw83716.workers.dev
```

If outbound browsing needs a proxy, set `MINIMAX_TEST_PROXY` for that process to the system proxy address.
