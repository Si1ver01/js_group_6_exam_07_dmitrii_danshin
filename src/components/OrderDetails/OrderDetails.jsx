import React, { Component } from "react";
import OrderItem from "./OrderItem/OrderItem.jsx";

export default class OrderDetails extends Component {
  

  render() {
    const unique = [...new Set(this.props.orderList)];
    console.log(this.props);


    return (
      <div className="d-flex flex-column w-50 border border-info mx-1">
        <h1>OrderDetail</h1>
        {unique.length ? (
          unique.map((elem, index) => <OrderItem name={elem} menu={this.props.menu} orderList={this.props.orderList} key={index} index={index}/>)
        ) : (
          <p>
            Order is Empty!
            <br /> Please add some items!
          </p>
        )}
      </div>
    );
  }
}
