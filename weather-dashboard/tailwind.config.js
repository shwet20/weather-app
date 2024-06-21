/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(0deg, #13588b, #13588b 25%, #073863 65%, #022d50 90%, #022d50)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'background-color': '#eef0f6',
        'container-bg': '#fff',
      },
      width: {
        'container': '60%',
      },
      padding: {
        'container-padding': '10px 20px 20px 20px',
      },
    },
  },
  plugins: [],
};
