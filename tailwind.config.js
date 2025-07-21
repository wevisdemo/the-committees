module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-\[#.*\]/ },
    { pattern: /text-\[#.*\]/ },
    { pattern: /border-\[#.*\]/ },
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["KondolarThai", "IBMPlexSansThai"],
    },
  },
  plugins: [],
};
