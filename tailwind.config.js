module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-bgImage": "url('assets/her-cake.jpg')",
      }),
    },
    animation: {
      spin: "spin 6s linear infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
