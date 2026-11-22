# Laxmi Krishna Multispeciality Dental Clinic

Official website for **Laxmi Krishna Multispeciality Dental Clinic**, Kurnool.

- **Specialists:**
  - **Dr. G. Venkata Sainath** (BDS, MDS — Oral & Maxillofacial Surgery, Implantologist)
  - **Dr. K. Krishna Tulasi** (BDS, MDS — Orthodontics & Dentofacial Orthopaedics, Aligner Specialist)
- **Address:** Beside HP Petrol Bunk, Venkata Ramana Colony, Kurnool – 518003, Andhra Pradesh
- **Phone / WhatsApp:** +91 83319 20026
- **Email:** lakshmikrishnadental@gmail.com
- **Instagram:** [@laxmikrishna_dental](https://www.instagram.com/laxmikrishna_dental/)
- **Google Maps:** [View location](https://maps.app.goo.gl/7r3gbYphd64KgF1x5)

## Working on the site

Built with [Astro](https://astro.build) and Tailwind CSS v4. Needs Node 22+.

    npm install
    npm run dev        # http://localhost:4321/laxmi-krishna-dental/
    npm run build      # static site in dist/

Where things live:

| What | Where |
|---|---|
| Phone, address, hours, services, doctors | `src/data/clinic.ts` (change once, used everywhere) |
| Colors, fonts (design tokens) | `src/styles/tokens.css` — each color is also a Tailwind class (`bg-forest`, `text-gold`…) |
| Alternative palettes | `src/styles/themes.css` |
| Page sections | `src/components/*.astro`, put together in `src/pages/index.astro` |
| Photos | `public/assets/images/` |

### Design lab

`/lab` (not linked, not indexed) shows hero variants side by side with a palette switcher.
To try a new idea, add a component to `src/components/heroes/` and list it in `src/pages/lab.astro`;
to try a new palette, add a block to `themes.css`.

## Hosting

GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`
(Settings → Pages → Source must be **GitHub Actions**). Pull requests are built but not deployed.
