/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { message } from 'antd';
import { connect } from 'react-redux';
import billImg from '../../Assets/images/bill.jpg';
import './CheckoutForm.scss';

// eslint-disable-next-line import/prefer-default-export

function CheckoutForm({ price, dealer }) {
  const stripe = useStripe();
  const elements = useElements();
  console.log(price);
  console.log(dealer);

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
            amount: price,
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
      <p style={{ marginLeft: '20px' }}>Your bill is Rs {price}</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: 900 }}>
        <CardElement className="card-elements-payment" />
        <button className="pay-btn">Pay</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  price: state.viewphotographerServices.setSelectedPrice,
  photographyType: state.viewphotographerServices.selectedPhotography,
  dealer: state.viewphotographerServices.selectedDealer,
});

export default connect(mapStateToProps, null)(CheckoutForm);
