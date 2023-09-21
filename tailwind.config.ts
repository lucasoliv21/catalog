import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colorBg: '#ebebeb',
      },
      fontFamily: {
        inter: ['Inter', 'sans'], 
      },
      fontSize: {
        '10px': '10px',
      },
    },
  },
  plugins: [],
}
export default config
