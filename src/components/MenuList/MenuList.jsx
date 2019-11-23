import React, { Component } from "react";
import MenuItem from "./MenuItem/MenuItem.jsx";

export default class MenuList extends Component {
  render() {
    return (
      <div className='d-flex flex-column w-50 border border-danger mx-1 px-1'>
        <h1>Menu list</h1>
        <div className="d-flex flex-wrap">
          {this.props.menu.map((elem,index) => <MenuItem {...elem} key={index} order={() => this.props.order(elem.name)}/>)}
        </div>
      </div>
    );
  }
}
