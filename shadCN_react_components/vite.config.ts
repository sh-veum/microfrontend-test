import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shadCN_react_components_1",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Info": "./src/lib/info",
        "./CustomButton": "./src/components/CustomButton",
        "./CustomCard": "./src/components/CustomCard",
        "./Footer": "./src/components/Footer",
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
    port: parseInt(process.env.VITE_PORT || "5001", 10),
    strictPort: true,
  },
  preview: {
    port: parseInt(process.env.VITE_PORT || "5001", 10),
    strictPort: true,
  },
});
