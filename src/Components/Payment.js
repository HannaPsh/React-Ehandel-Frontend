import React, { useEffect } from 'react';

const Payment = () => {
  let cart = JSON.parse(localStorage.getItem('cartItems'));
  useEffect(() => {
    console.log(cart);
  });

  return <div>Thank you! You have paid for you order!</div>;
};
export default Payment;
