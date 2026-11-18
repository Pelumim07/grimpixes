# GrimPixels website

React + TypeScript + Vite + Tailwind. All copy, links and the mint date live in `src/config.ts`.

## Run it
1. `npm install`
2. `npm run dev` (opens http://localhost:5173)
3. `npm run build` makes the production site in `dist/`

## Replace the placeholder art
The skulls are pixel sprites drawn in code (`src/lib/sprites.ts`) so the site works now. For the real collection, drop images in `public/` and swap the `<PixelArt />` tags in `src/App.tsx` for `<img src="/skull-1.png" alt="..." />`. Add a 1200x630 `public/og.png` for link previews on X.

## Go live on your own domain (Vercel)
1. Buy the domain (Namecheap, Cloudflare or GoDaddy).
2. Push this folder to a GitHub repo, then import it at vercel.com (Framework: Vite, Build: `npm run build`, Output: `dist`).
3. In Vercel: Project > Settings > Domains > add `yourdomain.com` and `www.yourdomain.com`.
4. Vercel shows the DNS records. At your registrar add them, usually an A record `@` to `76.76.21.21` and a CNAME `www` to `cname.vercel-dns.com`. Use the exact values Vercel shows.
5. Wait 5 to 60 minutes. HTTPS turns on by itself.
