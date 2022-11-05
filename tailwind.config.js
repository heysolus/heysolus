/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  // theme: {
  //   fontSize: {
  //     sm: '0.8rem',
  //     base: '1rem',
  //     xl: '1.25rem',
  //     '2xl': '24px',
  //     '3xl': '1.953rem',
  //     '4xl': '2.441rem',
  //     '5xl': '3.052rem',
  //   }
  // }
}
