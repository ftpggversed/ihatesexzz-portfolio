// tailwind.config.js
module.exports = {
  darkMode: 'class',   // ← enable class strategy
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // …
  ],
  theme: {
    extend: {
      // your custom tokens…
    },
  },
  plugins: [],
};
