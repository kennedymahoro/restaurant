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
        'primary': '#FCFBFA'
      },
      fontFamily: {
        crimson: ['var(--font-crimson)'],
        playfair: ['var(--font-playfair)'],
        roboto: ['var(--font-roboto)'],
        thinman: ['var(--font-ThinMan)'],
        merriweather: ['var(--font-merriweather)'],
      },
      fontSize: {
        'xss': ['.65rem',{
        lineHeight: '2.25em',
      }],
      },

    },
  },
  plugins: [],
}
export default config
