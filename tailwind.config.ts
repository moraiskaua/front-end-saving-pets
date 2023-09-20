import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url("/images/banner.png")',
        'contact-forms':'url("/images/wallpaper-contact-forms.jpg")', 
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-green': '#4BAD20',
        'bg-yellow': '#FFDE59',
        'bg-brown': '#5c4d42cc',
      },
      boxShadow: {
        'shadow-button': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
      fontFamily: {
        'font-merri-sans': ['Merriweather Sans', '-apple-system'],
      },
    },
  },
  plugins: [],
};
export default config;
