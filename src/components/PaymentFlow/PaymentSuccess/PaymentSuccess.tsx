import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './PaymentSuccess.scss';

function PaymentSuccess() {
  return (
    <Box className="payment-success-container">
      <Typography variant="h5">Thank You For Your Purchase</Typography>

      <Box className="button-container">
        <Typography variant="subtitle1">
          Order #123RGR231567Y Confirmed
        </Typography>

        <Button type="submit" variant="contained" color="primary">
          {'Track order'}
        </Button>
      </Box>
    </Box>
  );
}

export default PaymentSuccess;
