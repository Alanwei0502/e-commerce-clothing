import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItem.styles.scss";

const CollectionItem = (item) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={handleAddItem}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
