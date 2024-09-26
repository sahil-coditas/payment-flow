export interface FormValues {
  paymentMethod: 'card' | 'bank' | 'transfer';
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
  accountNumber?: string;
  bankName?: string;
  otp?: string;
}

export interface ButtonInterface {
  label: string;
  action: string;
  type: 'button' | 'submit';
}

export interface FieldValidation {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}

export interface FieldConfig {
  name: string;
  component: string;
  type: string;
  label: string;
  placeholder: string;
  validations: FieldValidation;
  width: string;
}
