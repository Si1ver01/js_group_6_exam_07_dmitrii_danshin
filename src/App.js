import React, { Component } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList.jsx";
import OrderDetail from "./components/OrderDetails/OrderDetails.jsx";

const menu = [
  { name: "Hamburger", price: 80, icon: "fas fa-hamburger red-text" },
  { name: "Cheeseburger", price: 90, icon: "fas fa-hamburger pink-text" },
  { name: "Pizza", price: 45, icon: "fas fa-pizza-slice purple-text" },
  { name: "Coffee", price: 70, icon: "fas fa-coffee deep-purple-text" },
  { name: "Tea", price: 50, icon: "fas fa-mug-hot indigo-text" },
  { name: "Cola", price: 40, icon: "fas fa-cocktail blue-text" }
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
    return (
      <div className="App d-flex justify-content-center align-items-strech w-50 mx-auto mt-5 h-75">
        <OrderDetail menu={menu} orderList={this.state.order} deleteOrderElement={this.deleteOrderElement}/>
        <MenuList menu={menu} order={this.order}/>
      </div>
    );
  }
}

export default App;
