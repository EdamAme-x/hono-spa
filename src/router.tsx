import { Hono } from "hono";
import { createRoot } from "hono/jsx/dom/client";
import { Index } from "./pages/index";
import { JSX } from "hono/jsx/jsx-runtime";
import { Book } from "./pages/books/[id]";
import { Books } from "./pages/books";

const router = new Hono<{
  Variables: {
    component: JSX.Element;
  };
}>();

router
  .use("/", async (c, next) => {
    c.set("component", <Index />);
    await next();
  })
  .use("/books", async (c, next) => {
    c.set("component", <Books />);
    await next();
  })
  .use("/books/:id", async (c, next) => {
    c.set("component", <Book id={c.req.param("id")} />);
    await next();
  });

router.use("*", async (c, next) => {
  await next();
  window.history.pushState(
    null,
    "",
    c.req.url.replace(/localhost/, window.location.origin.split("://")[1]),
  );
  createRoot(document.getElementById("root")!).render(c.get("component"));
});

window.addEventListener("popstate", () => {
  router.request(window.location.pathname);
});

export { router };
