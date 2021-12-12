import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleCartIcon = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={toggleCartIcon}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
