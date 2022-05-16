import React from 'react'
import OnePlayer from './OnePlayer'

const Players = ({ players, onAdd, onRemove }) => {

  return (
    <div className="all-products">
       {players.map((player) => (
        <OnePlayer key={player.id} player={player} onAdd={onAdd} onRemove={onRemove}/>
      ))}
    </div>
  )
}

export default Players