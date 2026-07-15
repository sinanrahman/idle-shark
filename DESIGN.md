---
name: Apex Precision
colors:
  surface: '#fff8f6'
  surface-dim: '#efd5ca'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e1'
  surface-container-high: '#fee3d8'
  surface-container-highest: '#f8ddd2'
  on-surface: '#261812'
  on-surface-variant: '#5a4137'
  inverse-surface: '#3d2d26'
  inverse-on-surface: '#ffede7'
  outline: '#8e7164'
  outline-variant: '#e2bfb1'
  surface-tint: '#a33e00'
  primary: '#a33e00'
  on-primary: '#ffffff'
  primary-container: '#fa6400'
  on-primary-container: '#511b00'
  inverse-primary: '#ffb596'
  secondary: '#595f69'
  on-secondary: '#ffffff'
  secondary-container: '#dde3ef'
  on-secondary-container: '#5f656f'
  tertiary: '#515f73'
  on-tertiary: '#ffffff'
  tertiary-container: '#8695aa'
  on-tertiary-container: '#1f2e3f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#dde3ef'
  secondary-fixed-dim: '#c1c7d3'
  on-secondary-fixed: '#161c25'
  on-secondary-fixed-variant: '#414751'
  tertiary-fixed: '#d4e4fb'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#fff8f6'
  on-background: '#261812'
  surface-variant: '#f8ddd2'
  surface-charcoal: '#242A33'
  accent-orange: '#FA6400'
  neutral-muted: '#A7B6CC'
  canvas-white: '#FFFFFF'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-edge: 1.5rem
  section-gap: 8rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The design system embodies a "High-End Corporate Modern" aesthetic, blending the precision of a top-tier digital consultancy with the energetic agility of a creative agency. It is built to communicate authority, technical excellence, and a "Designed for Impact" philosophy.

The visual language is characterized by:
- **Premium Professionalism:** Utilizing deep charcoals and expansive whitespace to create a sense of calm confidence.
- **Strategic Energy:** Using a vibrant orange for purposeful accents that guide the user’s eye toward conversion points and key insights.
- **Editorial Clarity:** A focus on structured layouts and refined typography that makes complex information digestible and compelling.
- **Fluid Sophistication:** Subtle transitions and soft, ambient depth that mirror the high-touch service of a boutique UK agency.

## Colors

The palette is anchored by a high-contrast relationship between **Surface Charcoal** (#242A33) and **Accent Orange** (#FA6400). 

- **Primary (Accent Orange):** Reserved for primary actions, critical brand moments, and interactive states. It represents the "Shark" energy—dynamic and impossible to ignore.
- **Secondary (Surface Charcoal):** Used for primary text, dark-themed sections, and headers. It provides a sophisticated, grounded foundation.
- **Tertiary (Neutral Muted):** A functional blue-grey used for borders, secondary text, and inactive UI elements to prevent the layout from feeling too heavy.
- **Canvas White:** The primary background color, used generously to ensure a "premium" airy feel and maximum legibility.

## Typography

This design system uses a dual-sans approach to balance character with utility.

**Hanken Grotesk** is the voice of the brand. Its sharp, contemporary geometry is used for all headlines and display text. Heavy weights (700+) should be used for impactful hero sections to create a "Designed for Impact" feel.

**Inter** is used for all functional and long-form content. Its neutral, systematic nature ensures high legibility and performance across all device types.

**Usage Notes:**
- Use `display-xl` sparingly for hero sections only.
- `label-md` should always be used with the defined letter spacing and uppercase styling for small navigational elements or category tags.
- For mobile, scale down large headlines using the provided mobile alternatives to ensure readability without excessive scrolling.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid** model. On desktop, content is centered within a 1280px container using a 12-column grid. On smaller devices, the grid shifts to 4 columns (mobile) and 8 columns (tablet) with fluid percentages.

**Key Principles:**
- **Generous Breathing Room:** Sections should be separated by a minimum of 8rem (`section-gap`) to maintain a premium, uncluttered atmosphere.
- **Asymmetric Balance:** Use whitespace as a functional element. Elements should not be crowded; use `stack-lg` for separating distinct content blocks within a section.
- **Safe Margins:** A consistent `margin-edge` ensures content never hits the screen edges on mobile devices.

## Elevation & Depth

Depth in the design system is achieved through **Tonal Layering** and **Ambient Shadows**.

- **Surface Tiers:** Use the secondary color (Surface Charcoal) to create high-contrast depth behind white cards or sections.
- **Shadow Profile:** Shadows should be "barely there." Use a large blur radius (32px+) with very low opacity (3-5%) tinted with the primary brand charcoal. This creates a soft, natural lift rather than a harsh drop-shadow.
- **Interactive Depth:** On hover, cards should subtly lift by increasing the shadow spread and shifting 2-4px upwards.
- **Glassmorphism:** Reserved for sticky navigation bars or overlays. Use a `20px` backdrop blur with a `10%` white opacity fill to maintain context of the content beneath.

## Shapes

The shape language is "Refined Rounded," using 0.5rem (8px) as the base radius. This strikes a balance between the friendliness of a digital partner and the professionalism of a corporate entity.

- **Standard Elements (Buttons, Inputs):** Use the base `rounded` (0.5rem).
- **Large Elements (Cards, Containers):** Use `rounded-lg` (1rem) to create a softer, more modern enclosure.
- **Feature Elements:** Occasional use of `rounded-xl` for large image containers or decorative background elements to break the rigidity of the grid.

## Components

### Buttons
- **Primary:** Solid `accent-orange` with white text. High-contrast, no shadow on rest, slight lift on hover.
- **Secondary:** Solid `surface-charcoal` with white text for high-impact secondary actions.
- **Ghost:** `surface-charcoal` border with transparent background; used for low-priority actions to preserve visual hierarchy.

### Input Fields
- Use a light-grey background (#F8F9FA) with a 1px border using `neutral-muted`. On focus, the border transitions to `accent-orange`.

### Cards
- White background with a `rounded-lg` corner radius and a soft ambient shadow. Cards should have generous internal padding (min 2rem) to reflect the overall layout philosophy.

### Lists & Navigation
- Links use a subtle underline transition that grows from left to right on hover.
- Navigation items in the header use `label-md` styling for a clean, architectural look.

### Chips & Tags
- Small, uppercase text in `label-md`. Use `surface-charcoal` with low-opacity backgrounds (e.g., 10% opacity) for a sophisticated "tag" look that doesn't compete with buttons.