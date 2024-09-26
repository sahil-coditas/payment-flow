import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import './OTPInput.scss';

const OTPInput = ({ handleOtp }: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      // Ensure only digits are allowed
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input
      if (index < 3) {
        inputsRef.current[index + 1]?.focus();
      } else {
        console.log(otp);
        handleOtp(otp.join(''));
      }
    } else {
      // Handle backspace and delete
      if (value === '') {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);

        // Move to the previous input
        if (index > 0) {
          inputsRef.current[index - 1]?.focus();
        }
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Move to the previous input
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <Box display="flex" gap={2}>
      {otp.map((value, index) => (
        <TextField
          key={index}
          value={value}
          onChange={(e) =>
            handleChange(e as ChangeEvent<HTMLInputElement>, index)
          }
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputRef={(el) => (inputsRef.current[index] = el)}
          variant="outlined"
          sx={{
            width: 50,
            textAlign: 'center',
            '& .MuiInputBase-input': {
              padding: '14px 20px',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default OTPInput;
