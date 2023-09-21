import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      colors: {
        'guard-blue-dark': '#041f4a',
        'guard-blue-mid': '#052962',
        'guard-yellow': '#ffe500',
        
        'guard-blue-dark-button': '#234b8a',
        'guard-yellow-button': '#ffd213',
        
        'guard-topic-red' : '#ff5943',
        'guard-topictext-red' : '#c70000',
        'guard-topicheadtext-red' : '#c70000',
        'guard-topictile-red': '#f6f6f6',
        'guard-topictile-hover-red': '#ededed',
        
        'guard-topic-orange' : '#ff7f0f',
        'guard-topictext-orange' : '#c74600',
        'guard-topicheadtext-orange' : '#c74600',
        'guard-topictile-orange' : '#fef9f5',
        'guard-topictile-hover-orange' : '#fdf0e8',
        
        'guard-topic-sky' : '#00b2ff',
        'guard-topictext-sky' : '#0077b6',
        'guard-topicheadtext-sky' : '#056890',
        'guard-topictile-sky': '#f6f6f6',
        'guard-topictile-hover-sky' : '#ededed',
        
        'guard-topic-beige' : '#eacca0',
        'guard-topictext-beige' : '#866d50',
        'guard-topicheadtext-beige' : '#6b5840',
        'guard-topictile-beige': '#f6f6f6',
        'guard-topictile-hover-beige' : '#ededed',
        
        'guard-topic-pink' : '#ffabdb',
        'guard-topictext-pink' : '#bb3b80',
        'guard-topicheadtext-pink' : '#7d0068',
        'guard-topictile-pink': '#f6f6f6',
        'guard-topictile-hover-pink' : '#ededed',
        
        'guard-tilebg-dark': '#d1d1d1',
        'guard-bg-white': '#ffffff',
        'guard-bg-grey': '#f2f2f2',

        'guard-div-blue': '#506991',
        'guard-div-grey': '#dcdcdc',
        
        'guard-subhead': '#121212',
        'guard-posted': '#707070',
        'guard-text-grey': '#b4b5b6'
        

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
