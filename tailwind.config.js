module.exports = {
  //...
  theme: {
    extend: {
      clipPath: {
        polygon:
          "polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-50px)" },
          "50%": { transform: "translateY(-100px)" },
          "75%": { transform: "translateY(-150px)" },
        },
      },
      animation: {
        move: "move 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
