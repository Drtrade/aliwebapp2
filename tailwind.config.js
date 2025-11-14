/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",        // App Router pages/layout/components inside src
    "./src/components/**/*.{js,ts,jsx,tsx}", // All components inside src
    "./src/app/pages/**/*.{js,ts,jsx,tsx}",      // Optional if you use Pages Router inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
