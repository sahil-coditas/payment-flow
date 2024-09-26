import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import './Library.scss';

function Library() {
  return (
    <Box>
      <Box className="library-box">
        subtitle1: <Typography variant="subtitle1">Lorem epsom...</Typography>
      </Box>
      <Box className="library-box">
        subtitle2: <Typography variant="subtitle2">Lorem epsom...</Typography>
      </Box>
      <Box className="library-box">
        label: <Typography variant="label">Lorem epsom...</Typography>
      </Box>
      <Box className="library-box">
        hint: <Typography variant="hint">Lorem epsom...</Typography>
      </Box>

      {/* Text Box */}

      <Box className="library-box">
        <Box className="text-box">
          <Typography variant="subtitle2">Card Number</Typography>
          <TextField
            id="outlined-basic"
            placeholder="Outlined"
            variant="outlined"
          />
        </Box>
        <Box className="text-box">
          <Typography variant="subtitle2">Card Number</Typography>
          <TextField
            placeholder="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
        </Box>
      </Box>

      {/* Button */}
      <Box className="library-box">
        <Button variant="contained" color="primary">
          Pay
        </Button>
        <Button variant="contained" color="secondary">
          Apply
        </Button>
      </Box>

      {/* Checkbox */}

      <Box className="library-box">
        <FormControlLabel control={<Checkbox />} label="Save card" />
        <FormControlLabel control={<Checkbox />} label="Save bank" />
      </Box>

      <Box className="library-box ">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Library;
