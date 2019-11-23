import React from "react";

const TotalPrice = ({ orderList, menu }) => {
  const totalPrice = orderList.reduce((sum, elem) => {
    let index = menu.findIndex(subElem => subElem.name === elem);
    return (sum += menu[index].price);
  }, 0);

  return (
    <div className="border-top border-secondary mx-4">
      <p>Total price : {totalPrice} kgs</p>
    </div>
  );
};

export default TotalPrice;
