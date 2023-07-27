/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './stories/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      width: {
        fontFamily: {
          serif: '"Inter", sans-serif',
        },
      }
    }
  },
}
