import React, { Component } from 'react'
import './App.css';
import MenuList from './components/MenuList/MenuList.jsx'
import OrderDetail from './components/OrderDetails/OrderDetails.jsx'

class App extends Component {
 render(){
  return (
    <div className="App">
      <OrderDetail />
      <MenuList />
    </div>
  );
 }
}

export default App;
