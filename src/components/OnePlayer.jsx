import React from 'react'
import { ImPlus, ImMinus } from "react-icons/im";

const OnePlayer = ({playerName, playerDesc}) => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://picsum.photos/200" alt="Neka slika"/>
      <div className="card-body">
        <h3 className="card-title">{playerName}</h3>
        <p className="card-text">
            {playerDesc}
        </p>
        <button className="btn">
          <ImPlus />
        </button>
        <button className="btn">
          <ImMinus />
        </button>

      </div>
    </div>

  )
}

export default OnePlayer