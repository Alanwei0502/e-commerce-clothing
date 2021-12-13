import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import CustomButton from "../custom-button/CustomButton.jsx";
import CartItem from "../cart-item/CartItem.jsx";
import "./CartDropdown.styles.scss";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckout = () => {
    dispatch(toggleCartHidden());
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
