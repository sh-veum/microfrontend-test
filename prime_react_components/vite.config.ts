import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "prime",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Products": "./src/components/Products",
        "./Info": "./src/lib/info",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: parseInt(process.env.VITE_PORT || "5003", 10),
    strictPort: true,
  },
  preview: {
    port: parseInt(process.env.VITE_PORT || "5003", 10),
    strictPort: true,
  },
});
