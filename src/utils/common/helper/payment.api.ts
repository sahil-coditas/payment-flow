import { paymentFlow } from './payment-flow';

export const getPayment = async () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(paymentFlow);
      }, 500);
    } catch (error) {
      reject(error);
      console.error(error);
    }
  });
};
