# DESIGN DIRECTION: BAYU DIGITAL ARCHIVE

## 1. Concept and Identity

The site is conceived as a "Curated Digital Archive", not a marketing landing page or template showcase. It positions Bayu as an independent design technologist and digital archivist based in Jakarta. The aesthetic draws inspiration from international museum registers, architectural monographs, and Swiss catalog design.

Key visual pillars:
- Archival Ledger System: Projects are numbered sequentially like accession files (BAY-2021-01 through BAY-2024-06) with metadata including year, medium, client, and current operational status.
- Structural Asymmetry: Sections break away from repetitive three-column grids. Layouts alternate between dense tabular indexes, editorial specimen cards, and structured dual-column documentation sheets.
- Restraint and Weight: Visual interest comes from typographic proportion, ruled register lines, and crisp tactile borders rather than decorative gradients, background grids, or floating blobs.

Design Read declaration:
Reading this as: personal portfolio and artifact archive for Bayu (Design Technologist and Archivist), in an editorial museum catalog style, dial ENERGY 2 / RHYTHM 3 / MOTION 1.

---

## 2. Target Audience

1. Design directors and curators looking for senior digital product craftsmanship and systems thinking.
2. Technical founders and engineering leaders seeking design engineers who write production-grade code.
3. Cultural institutions and editorial clients commissioning digital exhibitions, custom typography, and bespoke web platforms.

Tone of voice: Measured, factual, and direct. Descriptions explain client context, concrete constraints, materials used, and exact architectural roles without marketing fluff or empty superlatives.

---

## 3. Dials and Aesthetic Parameters

- ENERGY: 2 (Balanced. Confident editorial presence with deliberate negative space and museum-grade composure.)
- RHYTHM: 3 (Varied. Composition shifts deliberately between ledger tables, editorial broadsheets, and full-bleed project dossiers.)
- MOTION: 1 (Calm. Functional transitions only: 150ms state changes, instant tab switches, accessible disclosure panels. Zero perpetual pulsing or floating animations.)

---

## 4. Color Palette and Contrast Audit

The archive provides a fully functional dual theme (Archival Light and Obsidian Dark). Every color pairing satisfies WCAG 2.1 AA requirements (minimum 4.5:1 for body copy, 3.0:1 for large display headers and active controls).

### Dark Palette (Default State)
- Base Canvas (`--bg-primary`): `#0E1012` (Deep Charcoal Ink)
- Surface Layer (`--bg-surface`): `#16191D` (Archival Slate)
- Border / Rule Line (`--border`): `#2A2F37` (Toned Lead, ratio > 3:1 against background)
- Text Primary (`--text-primary`): `#F2F0EB` (Off-white Parchment, ratio 15.6:1 on `#0E1012`)
- Text Muted (`--text-muted`): `#9CA3AF` (Refined Grey, ratio 5.1:1 on `#0E1012`)
- Accent Signal (`--accent`): `#E05A36` (Archival Vermilion Stamp, ratio 4.8:1 on `#0E1012`)
- Focus Ring (`--focus-ring`): `#FFFFFF` (High contrast 2px solid with 2px offset)

### Light Palette (Alternate State via Toggle)
- Base Canvas (`--bg-primary`): `#F8F6F0` (Bone White Linen)
- Surface Layer (`--bg-surface`): `#EDEAE2` (Warm Archival Paper)
- Border / Rule Line (`--border`): `#D1CCC0` (Lead Chalk, ratio > 3:1 against canvas)
- Text Primary (`--text-primary`): `#14171A` (Black Ink, ratio 16.2:1 on `#F8F6F0`)
- Text Muted (`--text-muted`): `#565C66` (Graphite, ratio 5.2:1 on `#F8F6F0`)
- Accent Signal (`--accent`): `#C23E1B` (Deep Vermilion Ink, ratio 4.6:1 on `#F8F6F0`)

Palette Dose Rule: Vermilion accent is strictly confined to catalog status tags, current page indicator, and primary outbound action. It never floods cards or large backgrounds.

---

## 5. Typography System

Typography pairs a stark humanistic grotesque with a structured monospaced companion for metadata.

- Primary Display and Body: `Plus Jakarta Sans`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
  - Chosen for clean geometric forms with distinct humanist characteristics, matching Indonesian creative industry roots.
  - Heading 1: `clamp(2.5rem, 6vw, 4.5rem)`, weight 700, line-height 1.05, tracking -0.03em.
  - Heading 2: `clamp(1.75rem, 3.5vw, 2.75rem)`, weight 600, line-height 1.15, tracking -0.02em.
  - Body Text: `1rem` (16px) desktop, line-height 1.6, weight 400.
- Ledger Metadata and Numerical Data: `IBM Plex Mono`, `ui-monospace`, `monospace`
  - Chosen for legible technical tabular figures and authentic catalog indexing.
  - Microcopy and Accession Numbers: `0.8125rem` (13px), line-height 1.4, tracking 0.02em, weight 500.

Rules compliance: No monospace used as decorative headline slop. Monospace is restricted strictly to accession codes, dates, technical specifications, and tabular file data.

---

## 6. Page Structure and Content Architecture

The portfolio follows an intentional archival narrative without generic template sections.

1. Masthead and Registry Header:
   - Left: Bayu Registry Stamp ("ARCHIVE / BAYU / JK-ID").
   - Center: Live Jakarta time indicator (`WIB / UTC+7`) and availability badge.
   - Right: Functional Theme Switcher (Dark / Light) and quick navigation links (`#works`, `#systems`, `#colophon`, `#contact`).
2. Catalog Prologue (Hero):
   - Clear thematic headline stating Bayu's practice: "Design engineer and digital archivist building functional software systems, interactive publications, and design frameworks."
   - Concise summary of active focus areas: Product Engineering, Design Systems, Cultural Interfaces.
   - Primary action: "View Catalog Index" (jump to list) and "Open Contact Record".
3. Accession Ledger (Curated Works):
   - Filter bar with functional state buttons: "All Accessions", "Software & Systems", "Editorial & Web", "Physical & Speculative".
   - Structured table listing 6 real projects with accession keys, project title, discipline, client or context, delivery year, and an expandable preview drawer.
   - Selected featured projects with rich case dossiers (problem constraint, implemented architecture, live repository or deployment link).
4. Methodologies and System Architecture:
   - Dual-column comparison detailing technical stack, design philosophy, and performance standards.
   - No fake statistics or arbitrary percentages. Real principles: semantic HTML first, zero JavaScript build dependencies where possible, WCAG AA compliance.
5. Colophon and Physical Specimen:
   - Technical specifications of this website (file size budget, server-free deployment, typography licenses, color theory).
6. Dispatch and Inquiries (Footer):
   - Direct correspondence details (verified email, GitHub profile, LinkedIn).
   - Clean copyright and archival accession stamp with no generic 4-column link graveyard.

---

## 7. Responsive Layout and Breakpoint Behavior

- Breakpoint 1: Narrow Mobile (< 640px)
  - Masthead collapses into a clean two-row top bar. Navigation converts to an accessible slide-out ledger sheet triggered by an explicit menu button with `aria-expanded`.
  - Accession Ledger converts from horizontal multi-column table to stacked archival index cards with full-width tap targets (minimum 48px height).
  - Filter chips become a horizontally scrollable list with accessible edge indicators.
  - Zero horizontal overflow. All typography scales down through CSS `clamp()`.
- Breakpoint 2: Tablet and Small Laptop (640px to 1024px)
  - Two-column asymmetric layout. Navigation links remain visible in the top bar.
  - Accession Ledger renders as a 4-column table: Code, Project Title, Discipline, Year.
  - Detailed case study views split into 40% metadata column and 60% documentation canvas.
- Breakpoint 3: Wide Desktop (1024px to 1440px)
  - Max container width capped at 1280px with centered margin alignment.
  - Full catalog ledger displays 5 columns with inline inspection drawers.
  - Generous 80px to 120px structural section padding creating distinct catalog chapters.

---

## 8. Interaction and Accessibility Standards

- Interactive Semantics: Native `<button>` for filtering, toggles, and disclosure panels; native `<a href>` for external repositories and internal bookmarks.
- Touch Targets: Every clickable element maintains at least 44px by 44px tap area with minimum 8px separation.
- Keyboard Navigation: Full tab sequence verified. Skip link placed at the very top ("Skip to archive content"). Focus rings are explicit and high-contrast.
- Escape Key Support: Closes mobile navigation drawers and project inspection overlays.
- Motion Constraints: All transitions respect `@media (prefers-reduced-motion: reduce)`. Non-essential motion is disabled when the user preference is set.
- Copywriting Rules: No em dashes (`—`) anywhere in copy. Replaced with colons, parentheses, commas, or direct periods. No fabricated metrics or synthetic endorsements.
<<<END>>>
