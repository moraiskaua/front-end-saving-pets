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
        wallpaper: 'url("/images/wallpaper.jpg")',
        footprints: 'url("/images/footprints.png")',
        'wallpaper-about-us': 'url("/images/wallpaper-about-us.jpg")',
        'walllpaper-how-report': 'url("/images/wallpaper-how-report.jpg")',
        'contact-forms': 'url("/images/wallpaper-contact-forms.png")',
        'report-forms': 'url("/images/wallpaper-report-forms.png")',
      },
      colors: {
        brown: '#24150D',
        yellow: '#E7B32E',
      },
      boxShadow: {
        'shadow-button': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
      fontFamily: {
        jomhuria: 'Jomhuria, cursive',
        'hind-siliguri': 'Hind Siliguri, sans-serif',
      },
    },
  },
  plugins: [],
};
export default config;
