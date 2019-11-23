import React, { Component } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList.jsx";
import OrderDetail from "./components/OrderDetails/OrderDetails.jsx";

const menu = [
  { name: "Hamburger", price: 80, icon: "fas fa-hamburger" },
  { name: "Cheeseburger", price: 90, icon: "fas fa-hamburger" },
  { name: "Fries", price: 45, icon: "fas fa-hamburger" },
  { name: "Coffee", price: 70, icon: "fas fa-coffee" },
  { name: "Tea", price: 50, icon: "fas fa-mug-hot" },
  { name: "Cola", price: 40, icon: "fas fa-cocktail" }
];

class App extends Component {
  state = {
    order : '',
  }

  order = name => {
    const order = [...this.state.order,name]
    this.setState({order})
  };

  deleteOrderElement = name => {
    const order = [...this.state.order];
    const newOrder = order.filter(elem => elem !== name)
    this.setState({order: newOrder})
  }


  render() {
    console.log(this.state.order, 'Order')
    return (
      <div className="App d-flex justify-content-center align-items-strech w-50 mx-auto mt-5 h-75">
        <OrderDetail menu={menu} orderList={this.state.order} deleteOrderElement={this.deleteOrderElement}/>
        <MenuList menu={menu} order={this.order}/>
      </div>
    );
  }
}

export default App;
