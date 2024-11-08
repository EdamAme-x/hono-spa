import { router } from "../router";

export function Index() {
  return (
    <h1>
      Here is index.tsx, to{" "}
      <a style={{ color: "blue" }} onClick={() => router.request("/books")}>
        books
      </a>
    </h1>
  );
}
