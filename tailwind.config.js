/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wikiBg: '#f8f9fa',
        wikiBorder: '#a2a9b1',
        wikiLink: '#0645ad',
        wikiInput: '#eaecf0',
      },
    },
  },
  plugins: [],
}
