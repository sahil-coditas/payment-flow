import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { InputProps } from './Input.props';

const MyInput = ({ control, field, errors, variant }: InputProps) => {
  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: controllerField }) => (
        <TextField
          {...controllerField}
          variant={variant || 'outlined'}
          placeholder={field.placeholder}
          fullWidth
          error={!!errors[field.name]}
        />
      )}
    />
  );
};

export default MyInput;
