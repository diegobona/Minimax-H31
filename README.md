# MiniMax H3.1

[Visit minimax-h31.com](https://minimax-h31.com)

Source code for a MiniMax H3 video prompt workspace, practical model guides, and H3.1 release tracking.

## Explore the website

| Page | What you can find |
| --- | --- |
| [Video generator guide](https://minimax-h31.com/) | Organize prompts, shot settings, and reference materials. |
| [ComfyUI](https://minimax-h31.com/minimax-h3.1-comfyui) | Follow local H3 workflow setup, weight links, and troubleshooting. |
| [H3 Max comparison](https://minimax-h31.com/minimax-h3.1-max) | Compare documented H3 and H3 Max capabilities. |
| [Pricing](https://minimax-h31.com/minimax-h3.1-pricing) | Review planned credit packs and cost-per-video calculations. |
| [Release date](https://minimax-h31.com/minimax-h3.1-release-date) | Follow model announcements and linked release evidence. |

## Development

Use Node.js 22 or later and pnpm 9.4.0.

```sh
pnpm install --frozen-lockfile
pnpm dev:next
```

Open [localhost:7001](http://localhost:7001).

The public website uses the Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui.

| Directory | Purpose |
| --- | --- |
| `apps/next-app/app/` | Public pages, shared layout, and metadata. |
| `apps/next-app/content/` | Page copy and linked sources. |
| `apps/next-app/components/tool/` | Prompt and reference controls. |
| `apps/next-app/public/` | Brand assets and page images. |
| `apps/next-app/cloudflare/` | Static export and deployment scripts. |

## Deployment

The five public pages are exported with Next.js and hosted on Cloudflare Workers Static Assets.

With dependencies installed and Wrangler authenticated, run from the repository root:

```sh
node apps/next-app/cloudflare/deploy.mjs
```

See the [deployment guide](apps/next-app/cloudflare/README.md) for the existing build process and domains.

## Acknowledgments

Built on the TinyShip starter. The original license and supporting framework documentation remain in the repository.
