import React from "react";
import fakeInfo from "./services/fake.service.json";
import Card from "./../../Gen/Cards/index";
import "./style.css";
import DisplayListBar from "./components/DisplayList";

const Products = () => {
  const handleAddToCart = (_id) => {
    console.log(`added ${_id} to cart`);
  };
  const handleAddToWishList = (_id) => {
    console.log(`added ${_id} to wishlist`);
  };
  return (
    <div
      className="product-page-container"
      style={{ display: "relative", top: "0px" }}
    >
      <DisplayListBar />
      <div>
        <h1> Products </h1>
      </div>
      <div className="products-container">
        {fakeInfo.map((item, index) => (
          <div className="product-card" key={index}>
            <Card
              item={{
                ...item,
                button0: {
                  content: "Add to cart",
                  onClick: handleAddToCart,
                  color: "blue",
                },
                button1: {
                  content: "Add to wishlist",
                  onClick: handleAddToWishList,
                  color: "black",
                },
              }}
              key={index}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
