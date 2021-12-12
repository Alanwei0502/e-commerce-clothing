import React from "react";
import CustomButton from "../custom-button/CustomButton.jsx";
import CartItem from "../cart-item/CartItem.jsx";
import "./CartDropdown.styles.scss";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log({ cartItems });
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
