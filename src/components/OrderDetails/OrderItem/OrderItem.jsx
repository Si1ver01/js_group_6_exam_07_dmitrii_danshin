import React from "react";

const OrderItem = ({ name, menu, orderList,index , deleteOrderElement }) => {
  const quantity = orderList.filter(order => order === name).length;
  console.log(quantity)
  return (
    <div className='d-flex justify-content-between align-items-center px-2'>
      <span className="flex-grow-1 text-left">{name}</span>
      <span>x {quantity}</span>
      <span className='ml-2'>{menu[index].price * quantity} kgs</span>
      <button className='btn btn-danger ml-1' onClick={deleteOrderElement}><i className='fa fa-times'></i></button>
    </div>
  );
};

export default OrderItem;
