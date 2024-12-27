/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabin': ['Cabin'],
        'merri': ['Merriweather']
      },
      gridTemplateColumns: {
        'customGrid': 'repeat(auto-fit, minmax(200px, 1fr))',
        'customGrid2': 'repeat(auto-fit, minmax(250px, 1fr))',
        'customGrid3': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      screens: {
        'tab': {'max': '900px'},
        'tab2': {'max': '1200px'},
        'tab3': {'max': '1058px'},
        'break': {'max': '1058px'},
        'break2': {'max': '1030px'},
        'break3': {'min': '1030px'},
        'mob': {'max': '600px'},
        'midDesk': {'max': '800px'},
        'desk': {'min': '900px'},
      },
    },
  },
  plugins: [],
}

console.log('Tailwind config is loaded');
