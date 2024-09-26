import Box from '@mui/material/Box';
import OrderSummary from '../OrderSummary/OrderSummary';
import PaymentOptions from '../PaymentOptions/PaymentOptions';
import './Payment.scss';

const Payment = () => {
  return (
    <Box className="container-box">
      <Box className="box-1">
        <PaymentOptions />
      </Box>
      <Box className="box-1 box-2">
        <OrderSummary />
      </Box>
    </Box>
  );
};

export default Payment;
