import { ButtonProps } from './Button.props';
import MuiButton from '@mui/material/Button';

const Button = ({
  color = 'primary',
  type = 'button',
  value,
  variant,
  children,
  key,
}: ButtonProps) => {
  return (
    <MuiButton
      key={key || value}
      type={type}
      value={value}
      variant={variant}
      color={color}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
