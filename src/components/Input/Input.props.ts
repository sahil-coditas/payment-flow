import { Control } from 'react-hook-form';

export interface InputProps {
  control: Control<any>;
  variant?: 'standard' | 'outlined' | 'filled';
  field: {
    name: string;
    placeholder: string;
  };
  errors: any;
}
