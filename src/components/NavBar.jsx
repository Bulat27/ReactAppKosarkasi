import React from 'react';
import {BiBasketball} from "react-icons/bi";
import { Link } from "react-router-dom";

function NavBar( {teamNum} ) {
  return (
    <div className="navBar">
        <Link to="/">Basketball team builder</Link>
        <Link to="/team" className="cart-items">
        <BiBasketball style={{ marginLeft: 10 }} />
        <div className="cart-num"> {teamNum} </div>
      </Link>
    </div>
  )
}

export default NavBar
