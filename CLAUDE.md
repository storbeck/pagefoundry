Scope
- This file governs everything under `deliverables/pagefoundry-landing/`.

Goal
- Maintain a small library of niche‑specific, production‑ready landing pages tailored to Ormond Beach/Volusia County small businesses.
- Each example must be easy to edit, accessible, SEO‑sane, and deployable as a static site (no build step required).

Recent context (2025‑10)
- A luxury Realtor example now lives at `examples/realtor/` with a non‑overlay hero, editorial/light theme, and clear service tiles. Use this example as a pattern for future premium verticals.

Google Analytics - this tag must be added to every page for tracking.
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3T2F6KC52G"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3T2F6KC52G');
</script>

Realtor example — key implementation notes
- Brand & typography
  - Working brand placeholder: “Sable & Shore”. Keep it easy to swap.
  - Google Fonts (CDN): Inter (sans UI) and Playfair Display (serif headings).
  - Headings (`h1`, `h2`) use Playfair; body uses Inter. Increase base font size to improve readability (current base: ~18px).
- Hero
  - Full‑bleed image only (no text overlay). Crop with CSS `background-position` for subject framing.
  - File: `examples/realtor/assets/agent.jpg` (subject walking). Mobile background-position adjusted to keep the subject visible.
- Intro block (below hero)
  - Two short, confident paragraphs (`.lede`) that explain who we are + how we operate.
  - Primary CTAs (Call / Get Home Valuation).
  - “Who we help / Request valuation / Proven process” appears as three square feature cards that open modals (no fake links).
- What we do
  - Keep service tiles descriptive (not CTA): “Buyer representation”, “Listing & marketing”, “Home valuation”, “Private tours”.
- Proven results
  - Trend graphs implemented as inline SVG sparklines (fully static) with aria labels.
  - Three cards pinned over a photo: total volume, last year, local ranking.
- Inventory cards
  - Use local images only; avoid CSS upscaling (pre‑size to 1200×800 when possible).
  - “Request a Tour” uses `mailto:` subjects (no dead anchors).
- Communities mosaic
  - Assets swapped to `lake_area.jpg`, `the_trails.jpg`, `downtown.jpg`.
- Office & hours
  - Map panel contains an OpenStreetMap link button (no embeds) for `101 Main Street, Ormond Beach, FL 32174`.
- Modals
  - Three modals (“Who we help”, “Request valuation”, “Proven process”) are accessible: focus to close button, ESC and backdrop close, `aria-modal` + `role=dialog`.

Copy & grammar guidance
- Under “What we do”, write service‑oriented labels (noun phrases) rather than directives.
- Keep sentences short, parallel, and free of filler (“strong offers”, “qualified buyers”).
- Remove demo‑ish phrasing; all CTAs must be `tel:` or `mailto:` or jump to a real section.

Images & performance
- Prefer JPEGs for large content images (quality ~85–90); avoid browser upscales.
- If you must transform, use a real image tool (e.g., Pillow) to crop to target sizes; do not rely solely on CSS.
- Name assets descriptively (e.g., `beachside_bungalow.png`, `riverfront_townhome.png`).

Accessibility
- Alt text on all images; aria labels on charts and modals; visible focus states.
- Avoid overlay text on busy photography unless contrast and readability are guaranteed.

Do / Don’t
- Do: Center the intro title, keep intro concise, and remove extra noise.
- Do: Keep section order narrative: Hero → Intro → Feature cards (modals) → What we do → Results (trends) → Inventory → Press/Subscribe → Communities → Testimonials → Office/Hours → Contact.
- Don’t: Add dead anchors, external embeds, or heavyweight libraries.

Editing checklist (realtor)
- [ ] Hero image framed, no overlay text
- [ ] Two lede paragraphs present
- [ ] Feature cards open modals
- [ ] “What we do” phrased as services
- [ ] Results section shows trend graphs
- [ ] Inventory images local and sized
- [ ] Communities images mapped to `lake_area.jpg`, `the_trails.jpg`, `downtown.jpg`
- [ ] OSM link present in map panel
- [ ] CTAs point to `tel:` / `mailto:` only

Structure
- Keep one base template for PageFoundry marketing:
  - `index.html` and `styles.css` (already present) → PageFoundry local landing.
- Put client‑style examples under `examples/<slug>/`:
  - `examples/surf-shop/index.html`
  - `examples/cafe/index.html`
  - `examples/tax-accountant/index.html`
  - Each example has its own `styles.css` (copy of base with colors tweaked) and an optional `README.md` with notes.
- Use only relative paths; no external CDNs by default.

Niches (initial set to build)
- Surf shop, Café/Bakery, Tax Accountant/CPA, Realtor, Landscaping/Tree Service, Photographer, Salon/Spa, Fitness/Studio, Contractor/Handyman, Nonprofit/Community.

Page Sections (minimum)
- Header/nav with brand name and phone/CTA.
- Hero with clear value prop and primary CTA.
- Services/Offerings (3–6 items) with short copy.
- Social proof (testimonials, ratings, or partner badges) — optional.
- Hours/Location (use static map image placeholder and address text; no live embeds).
- Contact/Booking CTA with `mailto:` and optional `tel:`.
- Footer with NAP (name–address–phone) and copyright.

CTAs
- Use `mailto:hello@pagefoundry.dev` in PageFoundry marketing.
- In examples, use placeholder: `mailto:owner@example.com` and `tel:+1-386-555-0123`.
- Keep button labels task‑oriented: “Book a Session”, “Get a Quote”, “Order Ahead”.

Branding & Theming
- Drive all theming via CSS variables at the top of `styles.css`:
  - Surf: teal + sand
  - Café: coffee brown + cream
  - Tax: navy + slate
  - Realtor: deep green + gold accent
  - Photographer: black/ink + warm gray
- Avoid heavy libraries; keep the CSS file under ~200 lines per example.

SEO & Local Signals
- Unique `<title>` and `<meta name="description">` per example including the niche + “Ormond Beach, FL”.
- One `<h1>` per page, descriptive and benefit‑oriented.
- Use semantic headings in order (`h1`→`h2`→`h3`).
- Provide descriptive `alt` text for all decorative blocks/images.

Accessibility
- Ensure sufficient contrast for text/buttons.
- Focus outline visible for interactive elements.
- Links and buttons have clear hover/focus states.

Content Constraints
- Do not scrape or fetch live data. Use generic placeholder copy and images.
- If an image is needed, prefer local placeholders (solid color blocks with text) and `alt` text.

File Naming & Conventions
- Use lowercase slugs with hyphens: `tax-accountant`, `surf-shop`.
- Keep example HTML under 400 lines; favor short, readable markup.
- Avoid inline styles; use the example’s `styles.css` for theming.

Deliverable Quality Bar
- Opens cleanly in a browser from the filesystem.
- Lighthouse basics: semantic structure, good contrast, small CSS.
- Mobile‑first layout with responsive grid.

Deployment
- Each example should deploy as a root static site on Vercel/Netlify without a build step.
- Include a short `README.md` in each example with:
  - How to change colors/copy/CTAs
  - Suggested sections to tweak for that niche
  - Example titles/meta description text

Checklists (for each new example)
- [ ] Title + meta set with niche + Ormond Beach
- [ ] H1 written for conversion
- [ ] CTA buttons: primary + secondary
- [ ] Services list includes 3–6 offerings typical for the niche
- [ ] Hours/address block present (use placeholder)
- [ ] Accessibility: alt text, focus outlines, contrast
- [ ] CSS variables updated to niche palette
- [ ] README created with edit notes
