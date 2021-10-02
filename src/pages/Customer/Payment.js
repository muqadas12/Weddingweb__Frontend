import React from 'react';
import { loadStripe } from '@stripe/stripe-js'; // To use the Elements provider, call loadStripe from
import { Elements } from '@stripe/react-stripe-js'; // allow to use element componet of stripe
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY =
  'pk_test_51JebqAJnwz0YjBAE9ul7drSEMBPlgQS9P6P7UskvrMfDifAbsrPCgoDvwz7UeLQkweMgfja9qcD1Z7s35jVNcI3H002EvJlLap';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

// eslint-disable-next-line arrow-body-style
const Payment = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
