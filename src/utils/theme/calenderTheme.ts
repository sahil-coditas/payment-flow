import { createTheme, ThemeOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { colors } from './colors';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.green,
      light: colors.lightGreen, // A lighter shade of green
      dark: colors.darkGreen, // A darker shade of green
      contrastText: colors.white,
    },
    secondary: {
      main: colors.gray,
      light: colors.lightGray, // A lighter shade of gray
      dark: colors.darkGray, // A darker shade of gray
      contrastText: colors.black,
    },
    error: {
      main: colors.red, // Main error color
      light: colors.lightRed, // Lighter error shade
      dark: colors.darkRed, // Darker error shade
      contrastText: colors.white,
    },
    info: {
      main: colors.blue, // Main info color
      light: colors.lightBlue, // Lighter info shade
      dark: colors.darkBlue, // Darker info shade
      contrastText: colors.white,
    },
    success: {
      main: colors.green, // Main success color
      light: colors.lightGreen, // Lighter success shade
      dark: colors.darkGreen, // Darker success shade
      contrastText: colors.white,
    },
    background: {
      default: colors.white, // Default background color
      paper: colors.lightGray, // Background color for paper
    },
    text: {
      primary: colors.black, // Primary text color
      secondary: colors.gray, // Secondary text color
      disabled: colors.darkGray, // Disabled text color
    },
  },
  typography: {
    fontFamily: 'Inter',
    h4: {
      fontSize: '1rem',
      fontWeight: 900,
      letterSpacing: -0.02,
      width: 'fit-content',
    },
    h5: {
      fontSize: '0.75rem',
      fontWeight: 600,
      width: 'fit-content',
    },
  } as TypographyOptions,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const calenderTheme = createTheme(themeOptions);
