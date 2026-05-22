/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                "on-secondary-fixed-variant": "#004e5c",
                "tertiary-container": "#d97722",
                "on-secondary-container": "#00424e",
                "tertiary": "#ffb783",
                "primary-fixed": "#e9ddff",
                "on-tertiary-fixed": "#301400",
                "secondary-fixed": "#acedff",
                "surface-bright": "#333754",
                "primary-container": "#a078ff",
                "background": "#0d112c",
                "on-primary-fixed": "#23005c",
                "surface-container": "#1a1d39",
                "error": "#ffb4ab",
                "on-surface-variant": "#cbc3d7",
                "on-error": "#690005",
                "on-tertiary": "#4f2500",
                "surface-container-highest": "#2f334f",
                "surface-dim": "#0d112c",
                "on-primary-container": "#340080",
                "on-secondary-fixed": "#001f26",
                "on-primary": "#3c0091",
                "surface-container-high": "#242844",
                "on-error-container": "#ffdad6",
                "on-secondary": "#003640",
                "on-surface": "#dfe0ff",
                "error-container": "#93000a",
                "on-background": "#dfe0ff",
                "tertiary-fixed-dim": "#ffb783",
                "secondary": "#4cd7f6",
                "inverse-primary": "#6d3bd7",
                "surface-container-low": "#151935",
                "inverse-surface": "#dfe0ff",
                "inverse-on-surface": "#2b2e4b",
                "on-tertiary-fixed-variant": "#713700",
                "primary-fixed-dim": "#d0bcff",
                "on-primary-fixed-variant": "#5516be",
                "tertiary-fixed": "#ffdcc5",
                "surface-tint": "#d0bcff",
                "primary": "#d0bcff",
                "outline-variant": "#494454",
                "on-tertiary-container": "#451f00",
                "surface-variant": "#2f334f",
                "surface-container-lowest": "#080b27",
                "surface": "#0d112c",
                "secondary-fixed-dim": "#4cd7f6",
                "secondary-container": "#03b5d3",
                "outline": "#958ea0"
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            spacing: {
                "touch-target-min": "48px",
                "section-padding": "32px",
                "container-margin": "24px",
                "element-gap": "16px"
            },
            fontFamily: {
                "headline-lg": ["Be Vietnam Pro", "sans-serif"],
                "body-md": ["Be Vietnam Pro", "sans-serif"],
                "body-xl": ["Be Vietnam Pro", "sans-serif"],
                "display-hero": ["Be Vietnam Pro", "sans-serif"],
                "headline-lg-mobile": ["Be Vietnam Pro", "sans-serif"],
                "label-bold": ["Be Vietnam Pro", "sans-serif"]
            },
            fontSize: {
                "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "body-xl": ["20px", { "lineHeight": "30px", "fontWeight": "500" }],
                "display-hero": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                "label-bold": ["14px", { "lineHeight": "20px", "fontWeight": "700" }]
            }
        },
    },
    plugins: [],
}
