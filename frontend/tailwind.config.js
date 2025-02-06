// tailwind.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom blue
        secondary: "#EAB308", // Custom yellow
        accent: {
          light: "#7C3AED", // Light Purple
          DEFAULT: "#9333EA", // Medium Purple
          dark: "#6D28D9", // Dark Purple
        },
      },
    },
  },
  plugins: [],
});
