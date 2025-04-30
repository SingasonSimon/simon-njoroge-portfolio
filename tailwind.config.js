// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <-- ADD THIS LINE if missing, or ensure value is 'class'
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Ensure these paths are correct for your project
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }