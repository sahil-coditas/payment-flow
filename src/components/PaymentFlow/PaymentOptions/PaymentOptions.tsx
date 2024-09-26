import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createYupSchema } from './Schema';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import styled from '@mui/material/styles/styled';
import OTPInput from '../OTPInput/OTPInput';
import { useState, useEffect } from 'react';
import { getPayment } from '../../../utils/common/helper/payment.api';
import { useNavigate } from 'react-router-dom';
import { ButtonInterface, FormValues } from './IPaymentOptions';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

let paymentFlow: any;
const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0rem 1rem',
  paddingTop: '1rem',
  paddingBottom: '2rem',
  minHeight: '12rem',
  alignItems: 'center',
}));

const StyledBoxx = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4), // Use theme spacing for consistent gaps
}));

function PaymentOptions() {
  const initialValue = { step: 1, slide: { fields: [], buttons: [] } };
  const [currentStep, setCurrentStep] = useState(initialValue);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<
    'card' | 'bank' | 'transfer'
  >('card');

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(createYupSchema(currentStep.slide.fields)),
    defaultValues: {
      paymentMethod: 'card',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      accountNumber: '',
      bankName: 'access bank',
    },
    mode: 'onChange',
  });

  const watchedField = watch();

  async function fetchPayment() {
    paymentFlow = await getPayment();
    setCurrentStep((prev) => ({
      ...prev,
      slide: paymentFlow['paymentMethods']['card']['1'],
    }));
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedMethod = event.target.value as 'card' | 'bank' | 'transfer';
    setPaymentMethod(selectedMethod);
    setCurrentStep((prev) => ({
      ...prev,
      slide: paymentFlow['paymentMethods'][selectedMethod]['1'],
    }));
  };

  const handleOtp = (otp: string) => {
    setValue('otp', otp);
  };

  const onSubmit = (data: FormValues, event: any) => {
    const action = event?.nativeEvent.submitter.value;
    if (action !== 'payment_success') {
      setCurrentStep((prev) => ({
        ...prev,
        step: prev.step + 1,
        slide: paymentFlow['paymentMethods'][paymentMethod][action],
      }));
    } else {
      console.log(action !== 'done', action, errors);
      navigate('/success');
    }
  };

  useEffect(() => {
    // console.log('Dynamic field value changed:', errors);
  }, [watchedField]);

  useEffect(() => {
    fetchPayment();
  }, []);

  return (
    <Box className="payment-options-box">
      <Typography variant="subtitle1">Payment</Typography>
      <hr />
      {currentStep.slide.fields.length > 0 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="payment-options">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Pay With
              </FormLabel>
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      handleRadioChange(e);
                    }}
                    sx={{ display: 'flex', flexDirection: 'row' }}
                  >
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label="Card"
                    />
                    <FormControlLabel
                      value="bank"
                      control={<Radio />}
                      label="Bank"
                    />
                    <FormControlLabel
                      value="transfer"
                      control={<Radio />}
                      label="Transfer"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>

            <StyledBox>
              {currentStep.slide.fields.map((field: any) => {
                switch (field.component) {
                  case 'TextField':
                    return (
                      <Box
                        className="text-box"
                        sx={{ width: field.width, flexGrow: 1 }}
                        key={field.name}
                      >
                        <Typography variant="subtitle2">
                          {field.label}
                        </Typography>

                        <Input
                          control={control}
                          variant="outlined"
                          field={{
                            name: field.name,
                            placeholder: field.placeholder,
                          }}
                          errors={errors}
                        />
                        <Box sx={{ minHeight: '1.5rem', paddingTop: '0.3rem' }}>
                          {!!errors && (
                            <Typography variant="h6" color="red">
                              {errors[field.name as keyof FormValues]?.message}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    );

                  case 'OTP':
                    return (
                      <StyledBoxx
                        className="text-box"
                        sx={{ width: field.width }}
                        key={field.name}
                      >
                        <Typography variant="subtitle2">
                          Enter your 4-digit card pin to confirm this payment
                        </Typography>

                        <OTPInput handleOtp={handleOtp} />
                      </StyledBoxx>
                    );

                  case 'select':
                    return (
                      <Box
                        className="text-box"
                        sx={{ width: field.width, flexGrow: 1 }}
                        key={field.name}
                      >
                        <Select
                          displayEmpty
                          defaultValue={'0'}
                          sx={{ width: '100%' }}
                        >
                          <MenuItem value="0">Choose your Bank</MenuItem>
                          <MenuItem value={'ACCESS'}>Access Bank</MenuItem>
                          <MenuItem value={'HDFC'}>HDFC Bank</MenuItem>
                          <MenuItem value={'UNION'}>Union Bank</MenuItem>
                          <MenuItem value={'ICICI'}>ICICI Bank</MenuItem>
                        </Select>
                      </Box>
                    );

                  case 'transfer_success':
                    return (
                      <Box
                        className="text-box"
                        sx={{
                          width: field.width,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                        key={field.name}
                      >
                        <Typography variant="h5" color="#ACACAC">
                          Transfer USD 49.80 to:
                        </Typography>
                        <Typography variant="subtitle1">
                          Polaris Bank
                        </Typography>
                        <Typography variant="subtitle1">
                          0102836342526
                        </Typography>
                      </Box>
                    );

                  default:
                    return null;
                }
              })}
            </StyledBox>
          </Box>

          <Box sx={{ marginBottom: '1rem' }}>
            {currentStep.slide.buttons.map((button: ButtonInterface) => (
              <Button
                key={button.label}
                type={button.type}
                value={button.action}
                variant="contained"
                color="primary"
              >
                {button.label}
              </Button>
            ))}
          </Box>
          <Typography variant="h6" color="#ACACAC">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </Typography>
        </form>
      )}
    </Box>
  );
}

export default PaymentOptions;
