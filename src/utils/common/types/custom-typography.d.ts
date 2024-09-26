// custom-typography.d.ts
import '@mui/material/Typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    customVariant: true;
    label: true;
    hint: true;
  }
}
