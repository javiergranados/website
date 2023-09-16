/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        light: {
          primary: '#26325e',
          secondary: '#80B2ED',
          accent: '#8F3985',
          neutral: '#80B2ED',
          'base-100': '#C9DFF7',
          info: '#80B2ED',
          success: '#94C9A9',
          warning: '#F87575',
          error: '#F87575',
        },
        dark: {
          primary: '#80B2ED',
          secondary: '#ffff',
          accent: '#8F3985',
          neutral: '#ffff',
          'base-100': '#071220',
          info: '#80B2ED',
          success: '#94C9A9',
          warning: '#F87575',
          error: '#F87575',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
