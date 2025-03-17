module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transformStyle: ["preserve-3d"],
      backfaceVisibility: ["hidden"],
      perspective: ["1000"],
    },
  },
  plugins: [],
}