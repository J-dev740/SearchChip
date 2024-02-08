import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // 'background':"url('src/app/logo')"
      },
      fontFamily:{
        'roboto':['Roboto Mono','monospace'],
        'inter':['Inter', 'sans-serif'],
        'Satoshi':['satoshi','sans'],
      },
      animation:{
        hit:'fall 4s linear',
        hit1:'fall1 4s linear',

      },
      keyframes:{
        fall:{
          '0%':{ transform:'translateY(-500px)'},
          "50%": { transform: "translateY(20px)" },
          '100%':{ transform:'translateY(-2px)'},

        },
        fall1:{
          '0%':{ transform:'translateY(-1000px)'},
          "50%": { transform: "translateY(50px)" },
          '100%':{ transform:'translateY(-2px)'},
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
export default config
