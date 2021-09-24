// import { render, screen } from "@testing-library/react";
import React from "react-dom";
import App from "./App";

test("renders learn react link", () => {
  const div = document.createElement("div");
  React.render(<App />, div);
  expect(div.innerHTML).toContain("Hi There!");
});
