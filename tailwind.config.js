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
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        body: ["var(--font-geist)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "heading-xs": ["16px", "20px"],
        "body-xs": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0%",
          },
        ],
        "body-reg": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0%",
          },
        ],
      },
      fontWeight: {
        light: "300",
      },
      lineHeight: {
        "heading-xs": "24px",
      },
    },
  },
  plugins: [],
}; 