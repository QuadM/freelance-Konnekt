import React from "react";
import "./style.css";

const Card = ({ item, index }) => {
  return (
    <div className="card">
      {item.img ? (
        <img
          src={item.img}
          alt={"item #" + index}
          className="card-img"
          width={"100%"}
        />
      ) : null}
      <div className="card-content-container">
        {item.name ? <div className="card-name">{item.name}</div> : null}
        {item.description ? (
          <div className="card-description">{item.description}</div>
        ) : null}
        {item.price ? <div className="card-price">{item.price}</div> : null}
        {item.button0 ? (
          <span
            className={"card-button " + item.button0.color + "-button"}
            onClick={() => item.button0.onClick(item._id)}
          >
            {item.button0.content}
          </span>
        ) : null}
        {item.button1 ? (
          <span
            className={"card-button " + item.button1.color + "-button"}
            onClick={() => item.button1.onClick(item._id)}
          >
            {item.button1.content}
          </span>
        ) : null}
        {item.button2 ? (
          <span
            className={"card-button " + item.button2.color + "-button"}
            onClick={() => item.button2.onClick(item._id)}
          >
            {item.button2.content}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
