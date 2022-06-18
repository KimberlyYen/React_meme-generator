module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-650': '#672280',
        'purple-450': 'rgba(166, 38, 211, 1)',
        'slate-350': 'border: 1px solid rgba(213, 212, 216, 1)'
      },
    },
  },
  plugins: [

  ],
}