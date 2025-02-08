module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontSize: {
        default: ["15px", "21px"],
        "course-deatails-heading-small": ["26px", "36px"],
        "course-deatails-heading-large": ["36px", "44px"],
        "home-heading-small": ["28px", "34px"],
        "home-heading-large": ["48px", "56px"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
