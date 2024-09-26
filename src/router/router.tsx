import { createBrowserRouter, Navigate } from 'react-router-dom';
import Container from '../components/PaymentFlow/Container/Container';
import PaymentSuccess from '../components/PaymentFlow/PaymentSuccess/PaymentSuccess';
import Calender from '../components/Calender/Calender';
import Payment from '../components/PaymentFlow/Payment/Payment';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        index: true,
        // path: '',
        element: <Navigate to={'payment'} replace />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'success',
        element: <PaymentSuccess />,
      },
      {
        path: 'calender',
        element: <Calender />,
      },
    ],
  },
]);
