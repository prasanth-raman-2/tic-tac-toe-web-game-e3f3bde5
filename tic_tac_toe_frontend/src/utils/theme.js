export const theme = {
  colors: {
    primary: '#1976d2',
    secondary: '#90caf9',
    accent: '#ff7043',
    background: '#f5f7fa',
    text: '#2c3e50',
    border: '#e0e0e0',
    hover: '#1565c0',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export const getThemeValue = (path) => {
  return path.split('.').reduce((obj, key) => obj[key], theme);
};
