module.exports = {
  prefix: 'tld-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      'md': '750px',
      'lg': '990px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)',
        'body': 'var(--font-body-family)'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}