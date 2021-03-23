module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		 container: {
			 center: true,
		 },
		fontFamily: {
			'body': ['Raleway', 'sans-serif']
		},
		lineHeight: {
			'14': '4.063rem',
		},
		boxShadow: {
			'3xl': '0px 5px 5px 0px rgba(0,0,0,0.15)',
		},
		  colors: {
			  blue: {
				  light: '#80d8ff',
				  DEFAULT: '#82b1ff'
			  },
			  purple:{
				  light: '#b388ff'
			  },
			  pink:{
				  light: '#ea80fc'
			  },
			  black:{
				  light: '#061e37'
			  }
		  }
	 },
  },
  variants: {
    extend: {
		  translate: ['active', 'group-hover'],
		  opacity: ['active'],
	 },
  },
  plugins: [],
}
