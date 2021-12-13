import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartItemsCount);
  const toggleCartIcon = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={toggleCartIcon}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
