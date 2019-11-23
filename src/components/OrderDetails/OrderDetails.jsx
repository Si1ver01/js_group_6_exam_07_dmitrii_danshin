import React, { Component } from 'react'
import OrderItem from './OrderItem/OrderItem.jsx'

export default class OrderDetails extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-50 border border-info mx-1">
        <h1>OrderDetail</h1>
        <OrderItem/>
      </div>
    )
  }
}
