import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections.overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = () => {
  return (
    <Routes className="shop-page">
      <Route path={"/"} element={<CollectionsOverview />} />
      <Route path={"/:category"} element={<CollectionPage />} />
    </Routes>
  );
};

export default ShopPage;
