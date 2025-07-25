// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nesting': {}, // <--- IMPORTANT CHANGE: Use postcss-nesting directly
    tailwindcss: {},       // Tailwind CSS plugin should come AFTER postcss-nesting
    autoprefixer: {},
    // If you have any other custom PostCSS plugins (e.g., for @theme rule),
    // their placement might be important. Generally, they would go after Tailwind.
  },
};