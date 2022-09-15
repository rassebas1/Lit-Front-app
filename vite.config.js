import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";
import esmodule from "vite-plugin-esmodule";

export default defineConfig({
  rollupOptions: {
    output: {
      chunkFileNames: "[name].js",
    },
    input: {
      main: "../src/main.js",
    },
  },
  plugins: [commonjs],
});
