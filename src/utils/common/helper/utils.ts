export const returnStyleForTag = (tag: string, theme: any) => {
  switch (tag) {
    case 'h4':
      return {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
      };
      break;
    case 'h5':
      return {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
      };
      break;
    default:
      break;
  }
};
