import React, { Component } from "react";
import OrderItem from "./OrderItem/OrderItem.jsx";
import TotalPrice from './TotalPrice/TotalPrice.jsx'

export default class OrderDetails extends Component {
  render() {
    const unique = [...new Set(this.props.orderList)];

    return (
      <div className="d-flex flex-column w-50 border border-info mx-1">
        <h1>OrderDetail</h1>
        {unique.length ? (
          unique.map((elem, index) => (
            <OrderItem
              name={elem}
              menu={this.props.menu}
              orderList={this.props.orderList}
              key={index}
              index={index}
            />
          ))
        ) : (
          <p>
            Order is Empty!
            <br /> Please add some items!
          </p>
        )}
        <hr/>
        {this.props.orderList.length ? <TotalPrice orderList={this.props.orderList} menu={this.props.menu}/> : null}
      </div>
    );
  }
}
