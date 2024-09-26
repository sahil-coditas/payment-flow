import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '../../Button/Button';
import TextField from '@mui/material/TextField';
import './OrderSummary.scss';

function OrderSummary() {
  return (
    <Box className="payment-options-box">
      <Typography variant="subtitle1">Order Summary</Typography>
      <hr />
      <Box className="cart">
        <Box
          className="item-details"
          sx={{ display: 'flex', alignItems: 'top', gap: 1 }}
        >
          <img src="bag_img.png" alt="bag" />
          <Box className="text-box">
            <Box className="justify">
              <Typography variant="subtitle2">Taxmax Leather Bag</Typography>{' '}
              <Typography variant="subtitle2">$ 200</Typography>
            </Box>
            <Box className="justify">
              <Typography variant="h5" color="#ACACAC">
                Brown Vegan Leather
              </Typography>
              <Typography variant="h5" color="#ACACAC">
                Qty: 2
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <hr />
      <Box
        sx={{
          display: 'flex',
          padding: '1rem 0',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '80%' }}>
          <TextField
            id="outlined-basic"
            placeholder="Gift or discount code"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Box>
        <Box sx={{ width: '20%' }}>
          <Button variant="contained" color="secondary">
            Apply
          </Button>
        </Box>
      </Box>
      <hr />
      <Box
        sx={{
          display: 'flex',
          padding: '1rem 0',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="subtitle2">Subtotal</Typography>
          <Typography variant="subtitle2">Shipping</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">$49.80</Typography>
          <Typography variant="subtitle2">$7.24</Typography>
        </Box>
      </Box>
      <hr />
      <Box
        sx={{
          display: 'flex',
          padding: '1rem 0',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="subtitle2">Title</Typography>
          <Typography variant="h6" color="secondary">
            Including $2.24 in taxes{' '}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">$59.28</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderSummary;
