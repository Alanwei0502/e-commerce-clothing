import React from "react";
import StripeCheckout from "react-stripe-checkout";

const publishableKey =
  "pk_test_51KBKTHDPURyFFdZi6OAzOMdkkB8EQP0KDigQyQpcsPkABnX9V6pphEvXFYq4lZlAaIeAbTIoBAPnInJVqzpcnDIv00FrdIqOgI";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
