module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./*.html"   // <--- Add this line! This tells Tailwind to scan HTML files in the main folder.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}