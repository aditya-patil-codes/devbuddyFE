/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10a37f', // Accent color (green)
        secondary: '#a3a3a3', // Secondary text color (lighter gray for contrast)
        background: '#1A1A1D', // Dark background color
        inputBg: '#1e1e1e', // Input background color (dark gray)
        textPrimary: '#ffffff', // Primary text color (white for better contrast)
        textSecondary: '#a3a3a3', // Secondary text color (light gray)
      },
      gradientColorStops: {
        'pink-violet': ['#ff007f', '#8a2be2'], // Bright pink to violet
      },
    },
  },
  plugins: [],
};
