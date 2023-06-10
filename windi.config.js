import colors from 'windicss/colors'

function conicGradient(theme, direction, colorList) {
  const params = [
    direction,
    ...colorList.map(color => theme(`colors.${color}`)),
  ]

  return `conic-gradient(${params.join(', ')})`
}

module.exports = {
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        gray: colors.gray,
      },
      backgroundImage: theme => ({
        'conic-gradient': conicGradient(theme, 'from 300deg', [
          'emerald.400',
          'green.100',
          'emerald.300',
          'emerald.700',
          'green.100',
          'green.100',
          'emerald.600',
          'emerald.400',
        ]),
      }),
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      padding: {
        '1/3': '33.3333%',
        '2/3': '66.6667%',
        '3/4': '75%',
        '9/16': '56.25%',
      },
      typography: {
        DEFAULT: {
          css: {
            'color': '#d6d9dc',
            'strong': {
              color: 'white',
              fontWeight: '500',
            },
            'h1': {
              color: '#d6d9dc',
              fontWeight: '500',
            },
            'h2': {
              color: '#d6d9dc',
              fontWeight: '500',
            },
            'h3': {
              color: '#d6d9dc',
              fontWeight: '500',
            },
            'h4': {
              color: '#d6d9dc',
              fontWeight: '500',
            },
            'h5': {
              color: '#d6d9dc',
              fontWeight: '500',
            },
            'h6': {
              color: '#d6d9dc',
              fontWeight: '500',
            },
            'blockquote': {
              color: '#d6d9dc',
            },
            'code': {
              color: '#d6d9dc',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre': {
              backgroundColor: '#2d2d2d',
            },
            'hr': {
              borderTop: '1px solid #2d2d2d',
            },
            'a': {
              'color': '#d6d9dc',
              '&:hover': {
                color: '#10b981',
              },
            },
            'ol > li::before': {
              color: '#56524e',
            },
            'ul > li::before': {
              color: '#56524e',
              backgroundColor: '#56524e',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography'),
  ],
}
