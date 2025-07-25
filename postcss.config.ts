// postcss.config.js
module.exports = {
    plugins: {
      'tailwindcss/nesting': {}, // Highly recommended for Tailwind with PostCSS
      tailwindcss: {},
      autoprefixer: {}, // Essential for browser compatibility
      // If your `@theme` rule comes from a specific UI library or a custom PostCSS plugin,
      // you would add that plugin here. For example, if it's part of shadcn/ui's setup,
      // they might provide a specific plugin to include.
    },
  };