import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div classname="App">
      <Weather />
    </div>
  </StrictMode>
);
