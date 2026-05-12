# Component Refactor Implementation Plan

## Overview

Refactor the current `portfolio/` component structure for better reusability and more consistent styling while preserving the existing visual design. This should be a structure and consolidation pass, not a redesign.

The work should keep the current Nuxt 3, Tailwind, Nuxt Content, Nuxt Image, and Twemoji setup intact. Styling should remain recognisably the same, with consolidation limited to class sets and markup patterns that are identical or practically identical.

Generated and build artifact folders are explicitly excluded from the work.

## Current State Analysis

`portfolio/` is a Nuxt 3 app with these relevant source areas:

- `portfolio/components/`
- `portfolio/pages/`
- `portfolio/layouts/`
- `portfolio/types/`
- `portfolio/content/`
- `portfolio/assets/css/`
- app configuration files such as `nuxt.config.ts`, `content.config.ts`, `tailwind.config.js`, `eslint.config.mjs`, and `package.json`

Generated/build artifacts such as `.nuxt`, `.output`, `.data`, `node_modules`, and generated public output are not part of the refactor scope.

The default app shell is `portfolio/layouts/default.vue`. It renders the global dark gradient background, top background image, `NavigationBar`, page slot, and `NavigationFooter`. The only global CSS in `portfolio/assets/css/main.css` is the Tailwind import; most styling lives inline as Tailwind utility classes in Vue templates.

Components currently live in one flat folder:

- `NavigationBar.vue`
- `NavigationFooter.vue`
- `HomeHero.vue`
- `TravelCardGrid.vue`
- `TravelCard.vue`
- `TravelCardViewAll.vue`
- `TravelPost.vue`
- `PhotoCard.vue`
- `ImageEditor.vue`

Most site-facing components share a dark translucent style language: slate and gray backgrounds, white or slate text, gradient-clipped headings, soft borders, rounded corners, image overlays, backdrop blur, and hover glow states.

`ImageEditor.vue` is structurally different from the rest of the app. It is a large self-contained tool with its own scoped CSS and light UI surface. It also owns significant canvas rendering and file-handling behavior.

Repeated patterns identified in the source:

- Page headings repeat across `pages/index.vue`, `pages/travel/index.vue`, `pages/portfolio.vue`, and `pages/editor.vue`.
- Portfolio entry cards are duplicated six times in `pages/portfolio.vue`.
- Travel card styling is shared conceptually between `TravelCard.vue`, `TravelCardViewAll.vue`, `TravelPost.vue` photo thumbnails, and the unused `PhotoCard.vue`.
- Date formatting and country flag emoji helpers are duplicated between `TravelCard.vue` and `pages/travel/trips/[slug].vue`.
- The trip detail page includes reusable-looking sections that are still inline: trip hero/header, empty posts state, photo lightbox, and date/flag helpers.
- `PhotoCard.vue` and `types/photo-card-props.d.ts` are unused in non-generated source and should be discarded per the task guidance.

The portfolio data is currently hard-coded directly in `pages/portfolio.vue` markup rather than represented as data rendered through a component.

The README is still the Nuxt starter README and does not define project-specific styling conventions.

## Desired End State

The `portfolio/` app should have a clearer component structure grouped around domain and reuse:

- navigation components grouped together
- home components grouped together
- travel components grouped together
- portfolio components grouped together
- editor components grouped together
- small shared UI components only where repeated styling warrants it

Pages should primarily coordinate data fetching, SEO metadata, and composition. Repeated card and heading markup should live in reusable components.

Identical or practically identical Tailwind class sets should be consolidated into small Vue components or narrowly scoped shared helpers. The goal is not to introduce a large design system, but to reduce duplication while keeping existing styles visible and easy to audit.

Unused components should be removed rather than preserved for hypothetical future use.

Travel-specific formatting should live in shared utilities or composables rather than being copied between components and pages.

The final rendered appearance should match the existing app as closely as possible:

- same routes
- same layout density
- same colors and gradients
- same image assets
- same card shapes and hover treatments
- same mobile and desktop behaviour
- same editor behaviour

## Out-of-Scope Items

- Redesigning the app or changing the visual language.
- Introducing a third-party component library.
- Reworking Tailwind configuration beyond what is necessary for existing styles.
- Changing routes, content schema, or content JSON structure.
- Migrating static image assets.
- Modifying generated or build artifact folders.
- Rewriting the `ImageEditor` canvas/rendering pipeline.
- Adding new user-facing features.
- Replacing inline SVG icons unless that becomes necessary for a component extraction.
- Updating copy except where markup extraction requires preserving it in data.

## Implementation Approach

Proceed conservatively and in small, verifiable steps.

Use the existing code as the source of truth. Extract only patterns that are clearly repeated or useful to isolate:

- repeated page heading treatment
- repeated glass/translucent card surfaces
- repeated portfolio card layout
- repeated travel card shell/overlay treatment
- trip detail hero/lightbox sections
- travel date and flag formatting helpers

Prefer small, explicit Vue components over broad abstractions. Keep component props simple and close to the data already used by the pages.

Preserve Tailwind utility styling in Vue SFC templates where possible. Avoid moving large amounts of Tailwind into opaque JavaScript strings, because that can make styling harder to audit and can interfere with Tailwind class detection.

Treat `ImageEditor.vue` as a special case. Start by moving it into a domain folder or wrapping it in a clearer editor component boundary. Only split it further if the split is mechanical and low-risk, because the template, state, canvas rendering, and scoped CSS are tightly coupled.

Use explicit imports where component moves could make Nuxt auto-import names ambiguous.

Run verification after each meaningful phase rather than waiting until all files move.

## Phased Execution Plan

### Phase 1: Baseline Audit

Create a concise inventory of active source files and component usages, excluding generated folders and build artifacts.

Confirm:

- all active component usages
- unused component/type files
- route pages affected by the refactor
- repeated class and markup patterns to consolidate
- current lint/build commands from `package.json`

Success criteria:

- `PhotoCard.vue` and `PhotoCardProps` are confirmed unused in non-generated source.
- Generated folders are excluded from all search and refactor decisions.
- The affected runtime routes are known: `/`, `/travel/`, `/travel/trips/[slug]/`, `/portfolio/`, and `/editor/`.
- The implementation scope is limited to source files needed for this refactor.

### Phase 2: Remove Dead Components

Remove unused source:

- `portfolio/components/PhotoCard.vue`
- `portfolio/types/photo-card-props.d.ts`

Then search for stale references.

Success criteria:

- `rg "PhotoCard|PhotoCardProps" portfolio -g '!node_modules/**' -g '!.nuxt/**' -g '!.output/**' -g '!.data/**'` returns no relevant source references.
- No active import or type reference points to removed files.
- The app still type-checks/lints after removal.

### Phase 3: Introduce Small Shared UI Components

Extract the repeated page heading pattern used by home, travel, portfolio, and editor pages into a shared presentational component.

Candidate component:

- `components/ui/PageHeading.vue`

Expected responsibility:

- render the existing gradient primary heading style
- optionally render the existing smaller gradient subtitle style
- preserve current spacing by allowing the surrounding page to control margins where needed

Consider a small surface/card component only if it reduces exact duplication without hiding too much styling:

- `components/ui/GlassCard.vue`

Use this only for repeated card shells with the same `rounded-2xl`, border, translucent white background, backdrop blur, transition, and hover background treatment.

Success criteria:

- Repeated heading classes are removed from page templates.
- Rendered heading typography, gradients, and spacing match current pages.
- Any shared card/surface extraction preserves the current rounded corners, borders, translucent backgrounds, backdrop blur, and hover treatment.
- No broad design-system rewrite is introduced.

### Phase 4: Refactor Portfolio Page

Move repeated portfolio entry markup into a reusable portfolio card component.

Candidate components:

- `components/portfolio/PortfolioEntryCard.vue`
- optionally `components/portfolio/PortfolioSection.vue`

Represent current Experience and Projects entries as local arrays in `pages/portfolio.vue`, or in a nearby portfolio data module if that keeps the page clearer.

Preserve all current content:

- Deliveroo, RecruitHub, Magpie Education, Hatless Studios
- Duflist, Gridlink
- existing titles/subtitles
- existing date ranges
- existing logo paths
- existing grid layout and responsive behaviour

Success criteria:

- Six repeated card markup blocks collapse into reusable rendering.
- Existing visible content remains unchanged.
- Existing grid layout remains unchanged.
- Existing portfolio card styling remains unchanged.
- The page becomes easier to extend by adding data rather than duplicating markup.

### Phase 5: Refactor Travel Utilities And Components

Extract travel-specific formatting helpers used in multiple places.

Candidate file:

- `utils/travel-format.ts` or `composables/useTravelFormat.ts`

Candidate helpers:

- card month/year date formatting
- full date formatting
- date range formatting
- post date formatting
- country-code-to-flag emoji conversion

Update `TravelCard.vue` and `pages/travel/trips/[slug].vue` to use shared helpers.

Then group travel components into a domain folder:

- `components/travel/TravelCardGrid.vue`
- `components/travel/TravelCard.vue`
- `components/travel/TravelCardViewAll.vue`
- `components/travel/TravelPost.vue`

Consider extracting from the trip detail page:

- `components/travel/TripHero.vue`
- `components/travel/TravelPhotoLightbox.vue`
- optionally `components/travel/TravelEmptyState.vue`

Success criteria:

- Date and flag helper duplication is removed.
- Travel routes still render in the same order and with the same data.
- Trip detail header, post list, and lightbox retain current behaviour.
- Component moves do not break Nuxt auto-imports or explicit imports.

### Phase 6: Reorganize Remaining Component Structure

Move existing components into clearer domain folders.

Likely target structure:

```text
portfolio/components/
  editor/
    ImageEditor.vue
  home/
    HomeHero.vue
  navigation/
    NavigationBar.vue
    NavigationFooter.vue
  portfolio/
    PortfolioEntryCard.vue
    PortfolioSection.vue
  travel/
    TravelCard.vue
    TravelCardGrid.vue
    TravelCardViewAll.vue
    TravelPost.vue
    TripHero.vue
    TravelPhotoLightbox.vue
  ui/
    PageHeading.vue
    GlassCard.vue
```

Only include components that are actually created and used. Do not create placeholder files.

Keep names readable and explicit. Use imports where auto-import naming becomes unclear.

Success criteria:

- Root `components/` is no longer a flat mixed-domain folder.
- Every component in the new structure is used.
- No placeholder or speculative component remains.
- Pages remain readable composition points.

### Phase 7: Editor Containment

Move `ImageEditor.vue` into an editor domain folder. Do not rewrite its internals during the main refactor unless a very small extraction is clearly safe.

Possible low-risk follow-up extractions, only if needed:

- editor transform type definitions
- editor formatting helpers such as ratio parsing or EXIF formatting
- editor subpanels for chain/config/preview

For this task, treat those as optional and avoid them if they risk behavioural changes.

Success criteria:

- `/editor/` still renders the same editor UI.
- Image loading, transform chain controls, preview rendering, PNG download, and data URL copy still work.
- Scoped editor CSS remains contained to the editor experience.

### Phase 8: Verification

Run project verification from `portfolio/`:

- `npm run lint`
- `npm run build`

Perform manual route smoke checks:

- `/`
- `/travel/`
- at least one `/travel/trips/[slug]/` route with posts
- `/portfolio/`
- `/editor/`

For visual checks, compare the main surfaces before and after:

- page headings
- travel card grid
- trip detail hero
- travel post cards and photo carousel
- portfolio cards
- navigation and footer
- image editor layout

Success criteria:

- Lint passes.
- Build passes.
- No route fails to render.
- No component import warnings or missing component errors appear.
- No intentional visual differences are introduced.
- Removed files have no stale references.

## Risks Or Dependencies

Nuxt auto-import names may change when components move into folders. Use explicit imports where needed to reduce ambiguity.

Tailwind class consolidation can accidentally hide classes from Tailwind scanning if classes are assembled dynamically. Keep class strings static in Vue templates wherever possible.

`ImageEditor.vue` is the highest-risk component because it combines template state, canvas rendering, file input handling, dynamic EXIF import, export actions, and scoped CSS.

Portfolio card extraction is low-risk but must preserve all copy and asset paths exactly.

Travel helper extraction must preserve locale differences currently present in the code. `TravelCard.vue` uses `"en"` for month/year labels; the trip detail page uses `"en-US"` for full date formatting. Decide deliberately whether to preserve those exact locale choices in separate helpers.

Visual regressions are the primary risk. Automated lint/build checks will not prove styling parity, so manual route checks or screenshots should be part of the implementation pass.

The existing README does not document local styling conventions, so the checked-in code and research note should remain the source of truth.
