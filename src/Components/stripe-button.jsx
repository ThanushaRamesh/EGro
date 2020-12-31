import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I4KoPLleevLivMcw8t3aQHz0pR9K292A0Ap6HImjibr2NodMJZfMvWPMk6gGt4lJeQyj9zA7wVQFlKjQMXVH3Cn00hyDHSeze';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E Groceries Ltd.'
      billingAddress
      shippingAddress
     /*  image= '../Images/Logo.JPG' */
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;