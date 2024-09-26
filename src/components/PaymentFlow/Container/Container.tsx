import { Outlet, useLocation } from 'react-router-dom';
import './Container.scss';
import { ThemeProvider } from '@mui/material';
import { paymentTheme } from '../../../utils/theme/paymentTheme';
import { calenderTheme } from '../../../utils/theme/calenderTheme';

function Container() {
  const params = useLocation();
  const theme = params.pathname === '/payment' ? paymentTheme : calenderTheme;

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export default Container;
