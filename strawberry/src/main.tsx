import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./core/design_system/theme.tsx";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
