import React from 'react';
import OnePlayer from './OnePlayer';

const Team = ( {chosenPlayers, onRemove} ) => {
  return (
    <div className="card-container">
      <h1>This is your team</h1>
      {chosenPlayers.map((player) => (
        <OnePlayer key={player.id} player={player} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default Team