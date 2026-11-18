export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { lime: { DEFAULT: "#c8ff00", dim: "#9bc400" }, ink: "#0a0b08", panel: "#12130e", bone: "#f4f0e3" },
    fontFamily: { display: ["'Bowlby One'", "Impact", "sans-serif"], body: ["'Space Grotesk'", "system-ui", "sans-serif"], px: ["'Press Start 2P'", "monospace"] },
  } },
  plugins: [],
};
