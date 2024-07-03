import federation from "@originjs/vite-plugin-federation";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// vitest automatically sets NODE_ENV to 'test' when running tests
const isTest = process.env.NODE_ENV === "test";

// https://vitejs.dev/config/

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      !isTest && TanStackRouterVite(),
      federation({
        name: "host_app",
        remotes: {
          shadCN: `${process.env.VITE_REMOTE_SHAD_URL}/assets/remoteEntry.js`,
          shadCN2: `${process.env.VITE_REMOTE_SHAD2_URL}/assets/remoteEntry.js`,
          prime: `${process.env.VITE_REMOTE_PRIME_URL}/assets/remoteEntry.js`,
        },
        shared: ["react", "react-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
