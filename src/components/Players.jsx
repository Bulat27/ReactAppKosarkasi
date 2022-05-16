import React from 'react'
import OnePlayer from './OnePlayer'

const Players = ({ players, onAdd }) => {

  return (
    <div className="all-products">
       {players.map((player) => (
        <OnePlayer player={player} onAdd={onAdd}/>
      ))}
    </div>
  )
}

export default Players