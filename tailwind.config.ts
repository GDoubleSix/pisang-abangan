// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Tambahkan jalur konten di sini
    "./src/components/**/*.{js,ts,jsx,tsx}", // Jalur untuk komponen juga
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
