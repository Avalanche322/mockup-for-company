const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  black: colors.black,
		  white: colors.white,		
		  
		  blue: {
			  light: '#80d8ff',
			  DEFAULT: '#82b1ff',
			  dark: '#061e37',
		  },
		  purple: {
			  DEFAULT: '#b388ff'
		  },
		  pink: {
			  DEFAULT: '#ea80fc'
		  },
		  gray: {
			  light: '#b0bec5',
			  DEFAULT: '#78909c',
			  dark: '#90a4ae',
			  lighten: '#fafafa',
		  },
		  lime: {
			  DEFAULT: '#1de9b6'
		  },
		  brown: {
			  DEFAULT: '#363839'
		  },
		  green: {
			  success: '#06842c'
		  }
	  },
    extend: {
		container: {
			 center: true,
		},
		lineHeight: {
			'14': '4.063rem',
		},
		fontFamily: {
			'body': ['Raleway', 'sans-serif'],
		},
		boxShadow: {
			  '3xl': '0px 5px 5px 0px rgba(0,0,0,0.15)',
		},
		screens: {
			'extra-md': {'min': '920px' },
			'mini-sm': { 'min': '420px' },
		},
		fontSize: {
			'none': '0rem',
			'xxs': '0.5rem',
		},
	 },
  },
  variants: {
    extend: {
		  translate: ['active', 'group-hover'],
		  opacity: ['active'],
		  boxShadow: ['active'],
	 },
  },
  plugins: [],
}
