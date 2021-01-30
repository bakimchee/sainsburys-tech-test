export const theme = {
  breakpoints: {
    small: {
      max: '639px',
    },
    medium: {
      min: '640px',
      max: '767px',
    },
    large: {
      min: '1023px',
      max: '1279px',
    },
  },
  color: {
    palette: {
      red: '#CC2936',
      blueLight: '#afb8d0',
      blue: '#283044',
      blueDark: '#191f2b',
      yellow: '#FFA62B',
      green: '#607744',
      greyLight: '#F5F5F5',
      grey: '#D6D7D5',
      greyDark: '#3D3D3D',
      greyDarkest: '#292929',
      white: '#FFFFFF',
      orange: '#F06C00',
      orangeLight: 'rgba(240, 108, 0, 0.3)',
      orangeDark: '#E55000',
    },
  },
  size: {
    spacing: {
      default: '8px',
      small: '4px',
      large: '12px',
    },
    default: '48px',
  },
  border: {
    radius: {
      default: '8px',
      small: '2px',
      large: '12px',
    },
    width: {
      default: '2px',
      large: '4px',
    },
  },
  typography: {
    fontSize: {
      default: '16px',
      small: '14px',
    },
  },
};

export const mode = {
  light: {
    background: theme.color.palette.greyLight,
    foreground: theme.color.palette.white,
    text: theme.color.palette.greyDarkest,
    borderColor: theme.color.palette.grey,
  },
  dark: {
    background: theme.color.palette.greyDarkest,
    foreground: theme.color.palette.greyDark,
    text: theme.color.palette.white,
    borderColor: theme.color.palette.greyDarkest,
  },
};
