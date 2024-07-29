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
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      "xs": { "max": "576px" },
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)',
        'body': 'var(--font-body-family)'
      },
    },
   
  },
  plugins: [],
}