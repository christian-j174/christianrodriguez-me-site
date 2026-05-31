# Personal Website (Astro)

This is an Astro + Tailwind personal website template.

## Run locally

1. Install dependencies:
`npm install`
2. Start dev server:
`npm run dev`
3. Build for production:
`npm run build`

## Personalize

1. Update site identity and homepage intro:
`src/lib/site.ts`
2. Update social links, experience, projects, and gems:
`src/lib/data.ts`
3. Replace avatar and project/logo images:
`src/images/`
4. Update app manifest metadata:
`public/site.webmanifest`
5. Update favicon/app icons if needed:
`public/`
6. Set deployment URL before building:
`SITE_URL=https://your-domain.com npm run build`

## Deploy to Cloudflare Pages

Project settings:
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (repo root)

Environment variable:
- `SITE_URL=https://christianrodriguez.me`

Custom domain:
- Add `christianrodriguez.me` in Cloudflare Pages `Custom domains`.

## CI/CD (GitHub + Cloudflare Pages)

This repo includes GitHub CI at:
`/.github/workflows/ci.yml`

Behavior:
- On every push to `main`, run `npm ci` and `npm run build`
- On every pull request to `main`, run the same checks before merge

Cloudflare CD:
1. In Cloudflare Pages, create/connect this project with GitHub integration.
2. Select this repository.
3. Set production branch to `main`.
4. Keep preview deployments enabled for non-production branches.
5. Set `SITE_URL=https://christianrodriguez.me` in Pages environment variables.

Recommended flow:
1. Create feature branch.
2. Open PR to `main` and wait for CI to pass.
3. Merge PR.
4. Cloudflare automatically deploys to production from `main`.

## Notes

- Analytics script/domain is configured in `src/lib/site.ts`.
