/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFFFFF",
                secondary: "#F5F5F5",
                text: "#1A1A1A",
                accent: "#4A5D4E",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
        },
    },
    plugins: [],
}
