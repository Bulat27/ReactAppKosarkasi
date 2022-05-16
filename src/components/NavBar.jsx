import React from 'react'
import {BiBasketball} from "react-icons/bi"

function NavBar( {teamNum} ) {
  return (
    <div className="navBar">
        <a>Basketball team builder</a>
        <a className="cart-items">
        <BiBasketball style={{ marginLeft: 10 }} />
        <div className="cart-num">0
          {/* {teamNum} */}
        </div>
      </a>

    </div>
  )
}

export default NavBar
