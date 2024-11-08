import { to } from "../router";

export function Index() {
  return (
    <h1>
      Here is index.tsx, to{" "}
      <a style={{ color: "blue" }} onClick={() => to("/books")}>
        books
      </a>
    </h1>
  );
}
