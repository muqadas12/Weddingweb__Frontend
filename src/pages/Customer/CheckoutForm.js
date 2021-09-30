/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { message } from 'antd';
import billImg from '../../Assets/images/bill.jpg';
import './CheckoutForm.scss';

// eslint-disable-next-line import/prefer-default-export
export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          'http://localhost:2000/stripe/charge',
          {
            amount: 999,
            id,
          }
        );
        console.log('Stripe 35 | data', response.data.success);
        if (response.data.success) {
          console.log('CheckoutForm.js 25 | payment successful!');
          message.success('Payment done Successfully');
        }
      } catch (error) {
        console.log('CheckoutForm.js 28 | ', error);
        message.error('Payment not done ');
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
      <img className="bill-img-payment" src={billImg} alt="bill" />
      <form onSubmit={handleSubmit} style={{ maxWidth: 900 }}>
        <CardElement className="card-elements-payment" />
        <button className="pay-btn">Pay</button>
      </form>
    </div>
  );
};
