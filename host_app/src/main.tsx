import "./globals.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter } from "./router.tsx";
import { RouterProvider } from "@tanstack/react-router";

const router = createRouter();

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider
        router={router}
        defaultPreload="intent"
        // context={{ auth }}
      />
    </StrictMode>
  );
}
