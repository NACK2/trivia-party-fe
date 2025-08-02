import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomMantineThemeProvider from "./CustomMantineThemeProvider.tsx";
import App from "./App.tsx";
import "./Global.module.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomMantineThemeProvider>
      <App />
    </CustomMantineThemeProvider>
  </StrictMode>
);
