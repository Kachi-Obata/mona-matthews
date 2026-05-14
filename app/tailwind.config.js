/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        mm: {
          black: '#000000',
          white: '#FFFFFF',
          gold: '#C4A77D',
          gray: {
            100: '#F5F5F5',
            200: '#E8E8E8',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#666666',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'mm': '0.5px',
        'mm-wide': '2px',
        'mm-logo': '6px',
        'mm-caps': '3px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "underline-grow": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "underline-grow": "underline-grow 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
