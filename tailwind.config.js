/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins to Tailwind
      },
      fontSize: {
        '15px': '15px',
      },
      colors: {
        titleText: 'rgba(230, 241, 255, 0.9)',
      },
    },
  },
  plugins: [],
};
