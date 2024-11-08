import { useState } from "hono/jsx";
import { router } from "../router";

export function Books() {
  const [id, setId] = useState<string>("");

  return (
    <>
      <input
        type="text"
        placeholder="Book ID"
        value={id}
        onChange={(e) => setId((e.target as HTMLInputElement).value)}
      />
      <button onClick={() => router.request(`/books/${id}`)}>Go</button>
    </>
  );
}
