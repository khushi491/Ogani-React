import React, { useState } from "react";
import { useSelector } from "react-redux";
import LetestProduct from "./LetestProduct";
import ProductDiscount from "./ProductDiscount";
import Sidebar from "./Sidebar";

const ProductSection = () => {
  const { item } = useSelector((state) => state.shopReducer);
  console.log({ item });

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <div className="sidebar">
              <Sidebar />
              <LetestProduct />
            </div>
          </div>
          <div className="col-lg-9 col-md-7">
            <ProductDiscount />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
