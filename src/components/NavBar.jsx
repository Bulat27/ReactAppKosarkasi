import React from 'react'
import {BiBasketball} from "react-icons/bi"

function NavBar() {
  return (
    <div className="navBar">
        <a>Available players</a>
        <a className="cart-items">
        <BiBasketball style={{ marginLeft: 10 }} />
        <div className="cart-num">0</div>
      </a>

    </div>
  )
}

export default NavBar
