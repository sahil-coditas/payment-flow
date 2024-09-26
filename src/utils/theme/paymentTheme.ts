import {
  createTheme,
  ThemeOptions,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { componentTheme } from './componentTheme';
import { colors } from './colors';

// Extend the TypographyOptions interface
export interface CustomTypographyPropsVariantOverrides
  extends TypographyPropsVariantOverrides {
  customVariant: true;
  label: true;
  hint: true;
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.gray,
    },
  },
  typography: {
    fontFamily: 'Inter',
    subtitle1: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: -0.02,
      width: 'fit-content',
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 500,
      width: 'fit-content',
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
      fontWeight: 400,
    },
  } as TypographyOptions,
  components: componentTheme,
};

export const paymentTheme = createTheme(themeOptions);
