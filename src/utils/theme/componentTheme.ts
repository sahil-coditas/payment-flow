import { colors } from './colors';

export const componentTheme = {
  MuiTextField: {
    styleOverrides: {
      root: {
        backgroundColor: colors.white,
      },
      input: {
        padding: '0.5rem 0.5rem',
      },
      'otp-input': {
        padding: '200px',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        borderRadius: '4px',
        width: '100%',
        minHeight: '3rem',
      },
      contained: {
        color: colors.lightGray,
      },
      outlined: {
        borderColor: colors.blue,
        color: colors.blue,
        minHeight: '3rem',
        '&:hover': {
          borderColor: colors.lightBlue,
          color: colors.lightBlue,
        },
      },
      text: {
        color: colors.lightGray,
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: colors.gray,
        '&.Mui-disabled': {
          color: colors.gray,
        },
        disabled: {
          '& .MuiSvgIcon-root': {
            color: colors.darkGray,
          },
        },
        '& .MuiFormControlLabel-label': {
          color: colors.gray,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        color: colors.gray,
        '&:hover': {
          color: 'gray',
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        width: '100%',
        border: `1px solid ${colors.gray}`,
        borderRadius: '4px',
        color: colors.gray,
      },
      icon: {
        color: colors.gray,
      },
      outlined: {
        borderColor: colors.gray,
        '&:hover': {
          borderColor: colors.blue,
        },
      },
      filled: {
        backgroundColor: '#f0f0f0',
      },
      selectMenu: {
        '& .MuiPaper-root': {
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
          border: `1px solid ${colors.gray}`,
          borderRadius: '8px',
          minWidth: '200px',
          top: '100%',
          left: '0',
          transform: 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        },
        '& .MuiMenuItem-root': {
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: colors.hoverBackground,
          },
        },
        '& .MuiList-root': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        backgroundColor: colors.lightBackground,
        '&:hover': {
          backgroundColor: colors.hoverBackground,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: '13px 14px',
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        boxShadow: 'none',
        backgroundColor: colors.white,
        color: colors.gray,
      },
    },
  },
};

export const calendersTheme = {
  MuiPickers: {
    styleOverrides: {
      root: {
        backgroundColor: colors.white,
      },
      // Add other specific overrides if needed
    },
  },
};
