import { StrictMode } from "hono/jsx";
import { createRoot } from "hono/jsx/dom/client";
import { App } from "./app.tsx";
import { router } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

await router.request(window.location.href);
