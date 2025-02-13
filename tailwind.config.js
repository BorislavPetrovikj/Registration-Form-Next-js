/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        primary: {
          DEFAULT: "#0D71C9",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)"],
        mono: ["var(--font-geist-mono)"],
        heading: ["var(--font-heading)"],
        georgia: ["Georgia", "serif"],
      },
      fontSize: {
        "heading-xs": ["16px", "24px"],
      },
      lineHeight: {
        "heading-xs": "24px",
      },
    },
  },
  plugins: [],
}; 