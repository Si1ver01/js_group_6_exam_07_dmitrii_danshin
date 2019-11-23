import React from "react";

const OrderItem = ({ name, menu, orderList,index }) => {
  const quantity = orderList.filter(order => order === name).length;
  console.log(quantity)
  return (
    <div className='d-flex justify-content-between px-2'>
      <span className="flex-grow-1 text-left">{name}</span>
      <span>x {quantity}</span>
      <span className='ml-2'>{menu[index].price * quantity} kgs</span>
    </div>
  );
};

export default OrderItem;
