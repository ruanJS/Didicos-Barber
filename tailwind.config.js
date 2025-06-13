// estilos e configurações do Tailwind CSS
const config = {
  theme: {
    extend: {
      colors: {
        'barber': {
          'background': '#090909',
          'dark-gray': '#1C1C1C',
          'medium-gray': '#2F2F2F',
          'light-gray': '#808080',
          'border-gray': '#D9D9D9',
          'hover-btn': '#676565',
          'card-background': '#222222'
        }
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'source': ['Source Sans 3', 'sans-serif']
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900'
      },
      animation: {
        'shine': 'shine 5s infinite linear',
        'shine-card': 'shine-card 3s infinite ease-in-out',
        'scroll-left': 'scrollLeftToRight 15s linear infinite',
        'scroll-right': 'scrollRightToLeft 15s linear infinite'
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '-350px' },
          '50%': { 'background-position': '0' },
          '100%': { 'background-position': '350px' }
        },
        'shine-card': {
          '0%': { 'background-position': '-250px' },
          '50%': { 'background-position': '0' },
          '100%': { 'background-position': '250px' }
        },
        scrollLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '25%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        scrollRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '25%': { transform: 'translateX(50%)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    }
  }
}

export default config