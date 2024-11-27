import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EFF6FF",
        primary: "#4473E8",
        secondary: "#C3E2FF",
        hh: {
          from: "#0F53FF",
          via: "#739AFF",
          to: "#1248CF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
