import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./StylesA.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

particlesJS({
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: "#2563EB" },
    shape: { type: "circle" },
    opacity: {
      value: 0.4,
      random: true,
      anim: { enable: true, speed: 0.8, opacity_min: 0.05, sync: false },
    },
    size: {
      value: 2.5,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#3B82F6",
      opacity: 0.18,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
});

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2563EB",
      light: "#3B82F6",
      dark: "#1D4ED8",
    },
    secondary: {
      main: "#7C3AED",
      light: "#8B5CF6",
    },
    background: {
      default: "#0D1117",
      paper: "#161B22",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
    success: {
      main: "#22C55E",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.6 },
    overline: { letterSpacing: "0.18em", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 20px",
          transition: "all 0.2s ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "0 4px 16px rgba(37,99,235,0.35)" },
        },
        containedSecondary: {
          "&:hover": { boxShadow: "0 4px 16px rgba(124,58,237,0.35)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "#161B22",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
