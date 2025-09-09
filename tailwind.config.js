/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeInUp: "fadeInUp 0.3s ease-out",
        slideUp: "slideUp 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        rotate: "rotate 2s ease-in-out infinite",
        bounce: "bounce 1s ease-in-out infinite",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rotate: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(90deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
