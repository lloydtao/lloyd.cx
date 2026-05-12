# Component Refactor Research

## Research Question

What component and styling structure exists today in `portfolio/` for a Nuxt 3 and Tailwind component library direction, and which existing components, interactions, and styling patterns need to be understood while maintaining current styles?

## Summary Of Findings

`portfolio/` is a Nuxt 3 app using `@nuxt/content`, `@nuxt/eslint`, `@nuxt/image`, `@nuxtjs/tailwindcss`, and `nuxt-twemoji` via `portfolio/nuxt.config.ts`. Tailwind is imported globally from `portfolio/assets/css/main.css`, and most app styling is expressed directly in Vue templates as Tailwind utility classes.

The main app shell is `portfolio/layouts/default.vue`. It renders the page background, `NavigationBar`, the page slot, and `NavigationFooter`. Reusable components live in `portfolio/components/`. Travel data is stored as JSON under `portfolio/content/trips/**/index.json`, exposed through a Nuxt Content `trips` collection in `portfolio/content.config.ts`, and typed/validated by `portfolio/types/travel-card-props.ts`.

Most site-facing components share a dark translucent visual language: slate/gray backgrounds, white or slate text, gradient-clipped headings, soft borders, rounded corners, image overlays, blur/backdrop effects, and `NuxtImg` usage. `ImageEditor.vue` is structurally different from the rest of the site because it is a large self-contained tool with scoped CSS and semantic class names.

## Detailed Findings By Component

### Layout: `portfolio/layouts/default.vue`

The default layout renders an absolute full-page gradient background from gray-800 to gray-900, places `/images/bg.svg` at the top with `NuxtImg`, then overlays the navigation, page slot, and footer. It also contains a global `body` style that applies `bg-gray-900` and forces vertical scrolling.

### `NavigationBar.vue`

`NavigationBar` renders the primary site navigation. It displays a logo image from `/logo/lloyd-cat-3-128.png`, the `lloyd.cx` wordmark, desktop links for Home, Travel, Portfolio, and Editor, and a mobile menu controlled by a local `showMenu` ref. The mobile menu uses an inline SVG menu icon, an overlay, and a dropdown panel with `NuxtLink` items.

### `NavigationFooter.vue`

`NavigationFooter` renders copyright text and external links to GitHub, Instagram, and LinkedIn. It stores the current year in a Vue `ref`. Styling is inline Tailwind utility classes, using a responsive flex layout and gray/white text.

### `HomeHero.vue`

`HomeHero` is used on `pages/index.vue` and `pages/editor.vue`. It renders a centered profile image from `/images/lloyd-sg.jpg`, a masked grid background, the name "Lewis Lloyd", role text, and a short specialist statement. Styling uses Tailwind classes for the circular image, rings, shadows, gradient-clipped text, and centered layout.

### `TravelCardGrid.vue`

`TravelCardGrid` accepts `cards: TravelCardProps[]` and optional `displayViewAll`. It renders a responsive grid and passes each card object into `TravelCard` with `v-bind`. When `displayViewAll` is true, it appends `TravelCardViewAll`.

### `TravelCard.vue`

`TravelCard` accepts `TravelCardProps`. It links to `/travel/trips/${slug}/`, renders the trip cover photo with `NuxtImg`, displays country flags through `Twemoji`, formats the start date, and shows the number of posts. The visual pattern is a 3:4 image card with rounded corners, border, shadow, top and bottom translucent overlays, backdrop blur, and hover glow.

### `TravelCardViewAll.vue`

`TravelCardViewAll` is a companion grid card linking to `/travel/`. It uses a 3:4 rounded card shape, translucent slate gradient, hover glow, an inline SVG icon, and the text "View all".

### `TravelPost.vue`

`TravelPost` accepts a `TravelPost` object and a `formatPostDate` function, and emits `photo-click` with a `TravelPhoto`. It renders a post card with a background image from `/images/bg-travel.svg`, author avatar from `/images/lloyd-sg.jpg`, post metadata, photo count, a horizontal photo carousel, expandable/truncated description text, and share button markup.

It uses Tailwind utilities for layout and surface styling, plus scoped CSS for `.description-fade-tail` and `.carousel-scrollbar`. The description truncation uses computed values with `DESCRIPTION_PREVIEW_LENGTH` and `DESCRIPTION_FADE_WORDS`.

### `PhotoCard.vue`

`PhotoCard` accepts `PhotoCardProps`, links externally to `photoUrl`, renders the photo with `NuxtImg`, and displays formatted date and time metadata. It imports `PhotoCardProps` from `portfolio/types/photo-card-props.d.ts`. No current non-generated source usage was found during this pass.

### `ImageEditor.vue`

`ImageEditor` is used by `portfolio/pages/editor.vue`. It is a self-contained image editing tool with transform-chain controls for crop, stamp, and pad operations. It manages file loading, optional EXIF parsing via a dynamic import from `https://cdn.skypack.dev/exifr`, canvas rendering, transform ordering, preview rendering, PNG download, and data URL copying.

Unlike most site components, it uses semantic classes such as `.wrap`, `.topbar`, `.grid`, `.chain`, `.config`, `.preview`, `.btn`, `.chip`, `.row`, `.input`, and `.canvasWrap`, defined in a large scoped CSS block. The component has its own light UI surface with white panels and dark text.

## Page And Data Interactions

`portfolio/pages/index.vue` renders `HomeHero`, queries favourite trips from the `trips` collection with `queryCollection("trips").where("favourite", "=", true).order("startDate", "DESC").all()`, and passes the result to `TravelCardGrid` with `display-view-all`.

`portfolio/pages/travel/index.vue` queries all trips ordered by `startDate` descending and renders them through `TravelCardGrid`.

`portfolio/pages/travel/trips/[slug].vue` queries one trip by `route.params.slug`, renders a trip header, renders each post with `TravelPost`, and opens a lightbox when `TravelPost` emits `photo-click`.

`portfolio/pages/portfolio.vue` contains static Experience and Projects entries directly in the page template. These entries repeat a card pattern using `rounded-2xl`, `border border-white/20`, `bg-white/10`, `backdrop-blur-lg`, and hover background utilities.

`portfolio/pages/editor.vue` renders `HomeHero`, a page heading, and `ImageEditor`.

## Key File References

- `portfolio/package.json`
- `portfolio/nuxt.config.ts`
- `portfolio/tailwind.config.js`
- `portfolio/assets/css/main.css`
- `portfolio/layouts/default.vue`
- `portfolio/components/HomeHero.vue`
- `portfolio/components/NavigationBar.vue`
- `portfolio/components/NavigationFooter.vue`
- `portfolio/components/TravelCardGrid.vue`
- `portfolio/components/TravelCard.vue`
- `portfolio/components/TravelCardViewAll.vue`
- `portfolio/components/TravelPost.vue`
- `portfolio/components/PhotoCard.vue`
- `portfolio/components/ImageEditor.vue`
- `portfolio/pages/index.vue`
- `portfolio/pages/travel/index.vue`
- `portfolio/pages/travel/trips/[slug].vue`
- `portfolio/pages/portfolio.vue`
- `portfolio/pages/editor.vue`
- `portfolio/content.config.ts`
- `portfolio/types/travel-card-props.ts`
- `portfolio/types/photo-card-props.d.ts`
- `portfolio/.prettierrc`
- `portfolio/.prettierignore`

## Open Questions

- Whether `PhotoCard` is retained for future use, since no current non-generated source usage was found.
- Whether styling conventions exist outside the checked-in code; the current `portfolio/README.md` is still the Nuxt starter text.
- Whether generated folders such as `.nuxt` and `.output` should be included in any future codebase research scope, since this pass treated them as build artifacts.
