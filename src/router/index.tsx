import { Hono } from "hono";
import { createRoot } from "hono/jsx/dom/client";
import { Index } from "../pages/index.tsx";
import { JSX } from "hono/jsx/jsx-runtime";

const router = new Hono<{
  Variables: {
    component: JSX.Element;
  }
}>();

router.use("/", async (c, next) => {
  c.set("component", <Index />);
  await next();
}).use("/books/:id", async (c, next) => {
  c.set("component", <h1>Book {c.req.param("id")}</h1>);
  await next();
});

router.use("*", async (c) => {
  window.history.replaceState(null, "", c.req.url);
  createRoot(document.getElementById("spa-root")!).render(c.get("component"));
})

export {
  router,
}
