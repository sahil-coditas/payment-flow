export interface ButtonProps {
  key?: string;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  variant?: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
}
