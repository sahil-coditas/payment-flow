export const paymentFlow = {
  label: 'Pay with',
  defaultSelection: 'card',
  paymentMethods: {
    card: {
      method: 'card',
      description: '',
      '1': {
        name: 'Card Details',
        fields: [
          {
            name: 'cardNumber',
            component: 'TextField',
            type: 'text',
            label: 'Card Number',
            placeholder: 'Card Number',
            validations: {
              required: true,
              pattern: /^[0-9]+$/,
              maxLength: 16,
              minLength: 16,
            },
            width: '99%',
          },
          {
            name: 'expirationDate',
            component: 'TextField',
            type: 'text',
            label: 'Expiration Date',
            placeholder: 'Expiration Date (MM/YY)',
            validations: {
              required: true,
              pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
            },
            width: '48%',
          },
          {
            name: 'cvv',
            component: 'TextField',
            type: 'text',
            label: 'CVV',
            placeholder: 'CVV',
            validations: {
              required: true,
              maxLength: 4,
              minLength: 3,
              pattern: /^[0-9]+$/,
            },
            width: '48%',
          },
        ],
        buttons: [
          {
            label: 'Pay',
            action: '2',
            type: 'submit',
          },
        ],
      },
      '2': {
        name: 'OTP',
        description: 'Enter your 4-digit card pin to confirm this payment',
        fields: [
          {
            name: 'otp',
            component: 'OTP',
            type: 'Number',
            label: 'Card Number',
            placeholder: 'Card Number',
            validations: {
              required: true,
              pattern: /^[0-9]+$/,
            },
            width: '100%',
          },
        ],
        buttons: [
          {
            label: 'Enter OTP',
            action: 'payment_success',
            type: 'submit',
          },
        ],
      },
    },
    bank: {
      method: 'bank',
      description: '',
      '1': {
        name: 'Bank Details',
        fields: [
          {
            name: 'bankName',
            component: 'select',
            type: 'select',
            label: 'Select Bank',
            placeholder: 'Select Bank',
            validations: {
              required: true,
            },
            options: [
              { value: 'bank1', label: 'Bank 1' },
              { value: 'bank2', label: 'Bank 2' },
              { value: 'bank3', label: 'Bank 3' },
            ],
            width: '100%',
          },
          {
            name: 'accountNumber',
            component: 'TextField',
            type: 'text',
            label: 'Account Number',
            validations: {
              required: true,
              maxLength: 4,
              minLength: 3,
              pattern: /^[0-9]+$/,
            },
            placeholder: 'Number',
            width: '100%',
          },
        ],
        buttons: [
          {
            label: 'Submit',
            action: 'payment_success',
            type: 'submit',
          },
        ],
      },
    },
    transfer: {
      method: 'transfer',
      description: '',
      '1': {
        name: 'Transfer Details',
        fields: [
          {
            name: 'transferNumber',
            component: 'TextField',
            type: 'text',
            label: 'Transfer Number',
            placeholder: 'Number',
            validations: {
              required: true,
              maxLength: 7,
              pattern: /^[0-9]+$/,
            },
            width: '100%',
          },
        ],
        buttons: [
          {
            label: 'Click to Transfer',
            action: '2',
            type: 'submit',
          },
        ],
      },
      '2': {
        name: 'Transfer Details',
        fields: [
          {
            name: 'transferNumber',
            component: 'transfer_success',
            type: 'text',
            label: 'Transfer Number',
            placeholder: 'Number',
            validation: 'required',
            width: '100%',
          },
        ],
        buttons: [
          {
            label: 'Done',
            action: 'payment_success',
            type: 'submit',
          },
        ],
      },
    },
  },
};
