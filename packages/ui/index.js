import React from "react";
import { greet } from "@monorepo/shared";

export function App() {
  return (
    <div>
      <h1>{greet("Frontend")}</h1>
      <p>Welcome to the React frontend!</p>
    </div>
  );
}