import React from "react";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItem(cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(cartItem));
  };

  const onRemoveHandler = () => {
    dispatch(clearItemFromCart(cartItem));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={onRemoveHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
