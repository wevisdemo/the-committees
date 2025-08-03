module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-\[#.*\]/ },
    { pattern: /text-\[#.*\]/ },
    { pattern: /border-\[#.*\]/ },
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1025px",
      // => @media (min-width: 1025px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontFamily: {
      sans: ["KondolarThai", "IBMPlexSansThai"],
    },
  },
  plugins: [],
};
