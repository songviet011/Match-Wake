---
name: Social Wake-up System
colors:
  surface: '#0d112c'
  surface-dim: '#0d112c'
  surface-bright: '#333754'
  surface-container-lowest: '#080b27'
  surface-container-low: '#151935'
  surface-container: '#1a1d39'
  surface-container-high: '#242844'
  surface-container-highest: '#2f334f'
  on-surface: '#dfe0ff'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#dfe0ff'
  inverse-on-surface: '#2b2e4b'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97722'
  on-tertiary-container: '#451f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#0d112c'
  on-background: '#dfe0ff'
  surface-variant: '#2f334f'
typography:
  display-hero:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-xl:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 30px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-margin: 24px
  element-gap: 16px
  section-padding: 32px
  touch-target-min: 48px
---

## Brand & Style

The design system is engineered for a high-energy, community-centric morning experience. It targets Gen Z students in Vietnam, transforming the solitary act of waking up into a shared social ritual. The aesthetic is "Vibrant Midnight"—utilizing the depth of a late-night study session contrasted with the neon glow of digital connectivity.

The style blends **Glassmorphism** with **High-Contrast Bold** elements. It prioritizes tactile feedback and visual depth to ensure the UI feels alive, even at 6:00 AM. Every interaction should feel like a reward, using "squishy" physics and glowing transitions to keep users engaged and alert.

**Tone of Voice (Vietnamese):**
- Energetic (Năng động)
- Friendly (Thân thiện)
- Encouraging (Khích lệ)
- Direct (Trực diện)

## Colors

The palette is anchored by a deep navy neutral (`#0A0E29`), providing a high-contrast canvas for neon accents. 

- **Primary (Electric Purple):** Used for main actions and branding.
- **Secondary (Cyan Blue):** Used for secondary social features and status indicators.
- **Tertiary (Neon Orange):** Used for alerts, active alarms, and "wake-up" triggers to stimulate visual attention.
- **Accent (Lime):** Reserved exclusively for "Success" states—confirming the user is officially awake.

Gradients are mandatory for large surfaces and primary buttons to maintain a youthful, "liquid" feel. Backgrounds should never be flat black; use the deep navy to maintain depth and allow glass effects to pop.

## Typography

We use **Be Vietnam Pro** for its contemporary, geometric rhythm and exceptional support for Vietnamese diacritics. 

### Hierarchy Rules:
- **Display Hero:** Used for time displays (e.g., "07:30") and major wake-up calls.
- **Headlines:** Must be bold and impactful. Use for screen titles and "Match" notifications.
- **Body:** Kept clean and legible. Use Medium weight (`500`) for emphasis within text blocks to ensure readability against dark backgrounds.
- **Labels:** Always bold, often uppercase, to provide structural clarity in dense social feeds.

Avoid thin weights. In a dark-mode, high-vibrancy UI, thin lines disappear. Minimum weight for body text should be `400`.

## Layout & Spacing

This design system utilizes a **fluid grid** with generous safe areas. Because the target audience often interacts with the app while drowsy, spacing must be exaggerated to prevent accidental touches.

- **Margins:** A standard 24px side margin for mobile keeps content away from screen edges.
- **Rhythm:** An 8px base grid governs all spacing. 
- **Density:** Low. We prioritize "one thought per screen" to help users focus immediately after waking.
- **Breakpoints:**
  - Mobile: < 600px (Primary focus)
  - Tablet: 600px - 1024px (Expanded social view, multi-column cards)

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional shadows. This creates a "layered holograph" effect.

1.  **Backdrop Blur:** Use a `20px` to `40px` blur on all floating containers.
2.  **Borders:** Use a `1px` inner-stroke with a white-to-transparent gradient (20% opacity) to define the top edge of cards, simulating a light source from above.
3.  **Tonal Stacking:** 
    - Base: Deep Navy (#0A0E29).
    - Tier 1 (Cards): 8% White Overlay + Blur.
    - Tier 2 (Modals/Popups): 12% White Overlay + Blur + Subtle Outer Glow in the primary color.
4.  **Shadows:** When used, shadows should be highly diffused and tinted with the primary purple (`rgba(139, 92, 246, 0.3)`) rather than pure black.

## Shapes

The shape language is extremely soft and approachable. We use **Pill-shaped (32px+)** geometry for almost all interactive elements.

- **Main Cards:** 32px corner radius.
- **Buttons:** Fully rounded (pill) or 24px minimum.
- **Inputs:** 16px corner radius.
- **Icons:** Should feature soft, rounded edges. Avoid sharp corners or 90-degree angles in any decorative graphics.

This "bubbly" aesthetic reduces the perceived "hardness" of a morning alarm, making the app feel like a friendly companion rather than a utility.

## Components

### Buttons
- **Primary:** Gradient background (`primary-dawn`), white text, bold weight. Use a subtle `box-shadow` glow matching the gradient colors.
- **Social/Ghost:** Glassmorphic background with a 1px solid secondary color border.

### Chips (Tags)
- Used for "Interests" (Sở thích) or "Major" (Chuyên ngành). Pill-shaped, semi-transparent backgrounds with high-contrast text.

### Cards (The "Match" Card)
- The core of the experience. Must use heavy backdrop blur. Include a "3D-style" avatar that breaks the top boundary of the card to create a sense of verticality.

### Lists
- Each list item should be its own glass container with a 12px gap between items. Avoid "divider lines"—use space and container boundaries to separate content.

### Alarm Toggle
- Oversized switch. When "ON," the handle should glow with a neon lime (`accent_neon`) aura.

### Input Fields
- Darker than the background with a 1px border that "lights up" with a gradient when focused. Text should be large and easy to type while half-asleep.

### 3D Icons
- Use glossy, high-specular 3D assets for primary navigation and status rewards. Icons should look "touchable" and "inflated."