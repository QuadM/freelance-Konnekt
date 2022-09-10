import React from "react";
import "./style.css";

const DisplayListBar = () => {
  return (
    <div className="list-bar-container light-gray-transparent-background">
      <div className="list-container white-background">
        <div className="wish-list">
          <span>wish list</span>
          <span>12,300</span>
        </div>
        <div className="cart-list">
          <span>cart list</span>
          <span>12,300</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayListBar;
