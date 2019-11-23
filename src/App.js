import React, { Component } from 'react'
import './App.css';
import MenuList from './components/MenuList/MenuList.jsx'
import OrderDetail from './components/OrderDetails/OrderDetails.jsx'

const menu = [
  {name : 'Hamburger', price:80 , icon : 'image'},
  {name : 'Cheeseburger', price:90 , icon : 'image'},
  {name : 'Fries', price:45 , icon : 'image'},
  {name : 'Coffee', price:70 , icon : 'image'},
  {name : 'Tea', price:50 , icon : 'image'},
  {name : 'Cola', price:40 , icon : 'image'},
]

class App extends Component {
 render(){
  return (
    <div className="App d-flex w-75 border border-primary">
      <OrderDetail />
      <MenuList />
    </div>
  );
 }
}

export default App;
