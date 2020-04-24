import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class NavBar extends Component {
  render(){
    return(
      <div className="nav-bar">
        <ul className="p-2 bg-dark text-light" style={{listStyleType: 'none'}}>
          <li className="m-1 d-inline-block">
            <NavLink exact to="/" className="text-light">HOME</NavLink>
          </li>
          <li className="m-1 d-inline-block">
            <NavLink to="/about" className="text-light">ABOUT</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
export default NavBar
