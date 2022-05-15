import React from 'react'
import OnePlayer from './OnePlayer'

const Players = () => {
    const name = "New Player Name";
    const description =	
        "New player description that we got from Player component using props.";

  return (
    <div className="all-products">
        <OnePlayer playerName={name} playerDesc = {description}/>
        <OnePlayer playerName={name} playerDesc = {description}/>
        <OnePlayer playerName={name} playerDesc = {description}/>
    </div>
  )
}

export default Players