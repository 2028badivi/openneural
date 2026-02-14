/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00f0ff", /* Cyber Cyan */
                "secondary": "#7000ff", /* Deep Violet */
                "background-dark": "#050b14", /* Deep Space */
                "background-card": "#0a1625",
                "surface": "#0f2135",
                "accent-alert": "#ff2a6d",
            },
            fontFamily: {
                "sans": ["Inter", "system-ui", "sans-serif"],
                "mono": ["'JetBrains Mono'", "monospace"],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
            },
            animation: {
                'scan': 'scan 4s linear infinite',
            },
            keyframes: {
                scan: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                }
            }
        },
    },
    plugins: [],
}
