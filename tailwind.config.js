/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#0f172a", /* Slate 900 */
                "secondary": "#334155", /* Slate 700 */
                "accent": "#0369a1", /* Sky 700 - Professional Blue */
                "background": "#ffffff",
                "surface": "#f8fafc", /* Slate 50 */
                "border-light": "#e2e8f0",
            },
            fontFamily: {
                "sans": ["Inter", "system-ui", "sans-serif"],
                "serif": ["'Playfair Display'", "Georgia", "serif"],
            },
        },
    },
    plugins: [],
}
