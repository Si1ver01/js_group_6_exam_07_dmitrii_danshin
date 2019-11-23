import React from "react";

const MenuItem = ({ name, price, icon , order }) => {
  return (
    <div className="d-flex border border-warning rounded my-1 w-100 justify-content-around cards" onClick={order}>
      <i className={icon}></i>
      <div className="d-flex flex-column">
        <span>{name}</span>
        <span>Price : {price} kgs</span>
      </div>
    </div>
  );
};

export default MenuItem;
