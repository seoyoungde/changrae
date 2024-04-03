import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    accept: Palette["primary"];
    deny: Palette["primary"];
  }

  interface PaletteOptions {
    accept: PaletteOptions["primary"];
    deny: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#213e6a",
    },
    secondary: {
      main: "#213e6a",
    },
    accept: {
      main: "rgba(131, 194, 197, 0.5)",
      contrastText: "#000000",
    },
    deny: {
      main: "#FBBBBB",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
