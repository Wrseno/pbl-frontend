tailwind.config = {
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        ["infinite-slider-reverse"]:
          "infiniteSliderReverse 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": {transform: "translateX(0)"},
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        infiniteSliderReverse: {
          "0%": {transform: "translateX(calc(-250px * 5))"},
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      colors: {
        primary: "#1886EA",
        secondary: "#53A6FF",
        tertiary: "#FAAD14",
      },
      dropShadow: {
        wh: "0 10px 10px rgba(200, 200, 255, 0.2)",
      },
    },
  },
};
