import React from 'react'
import { ImPlus, ImMinus } from "react-icons/im";

const OnePlayer = ({ player, onAdd, onRemove }) => {
  
  return (
    <div className="card">
      <img className="card-img-top" src="https://picsum.photos/200" alt="Neka slika"/>
      <div className="card-body">
        <h3 className="card-title">{player.name}</h3>
        <p className="card-text">
            {player.description}
        </p>
        {/* <button className="btn" onClick={() => onAdd(player.id)}>
          <ImPlus />
        </button>
        <button className="btn">
          <ImMinus />
        </button> */}
      {player.chosen ? (
        <button className="btn" onClick={() => onRemove(player.id)}>
        <ImMinus />
      </button>
      ):
      <button className="btn" onClick={() => onAdd(player.id)}>
        <ImPlus />
      </button>
      }
      </div>
    </div>

  )
}

export default OnePlayer