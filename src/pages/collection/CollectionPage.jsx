import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selector";
import "./CollectionPage.styles.scss";

const CollectionPage = () => {
  const { category } = useParams();
  const { title, items } = useSelector(selectCollection(category));
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
