import React from 'react'
import { ImPlus, ImMinus } from "react-icons/im";

const OnePlayer = ({ player, onAdd }) => {
  
  return (
    <div className="card">
      <img className="card-img-top" src="https://picsum.photos/200" alt="Neka slika"/>
      <div className="card-body">
        <h3 className="card-title">{player.name}</h3>
        <p className="card-text">
            {player.description}
        </p>
        <button className="btn" onClick={() => onAdd(player.id)}>
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