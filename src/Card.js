import React, { useState } from 'react';
import './App.css';

function Card(props) {

  const articles = [
    {
      cardName: 'Name of the card',
      dialogue: ['dial 1', 'dial 2', 'dial 3'],
    },
    {
      cardName: 'Name of the card 2',
      dialogue: ['dial 12', 'dial 22', 'dial 32'],
    },
  ];

  console.log(articles[1].dialogue[1])

  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const { anecdotes } = props;

  const cardDisplay = () => {
    setClicked(true);
    if (!clicked) {
      setCount(anecdotes[Math.floor(Math.random() * anecdotes.length)])
    }
  }

  // Choisir alétoirement une carte et son texte 
  // display 
  // Changer le texte aleatoirement
  // display 

  return (
    <div className="main">

      <img src='/img/backimg.png' className="card" alt="tarot card" />
      <p>
        Text the guy says
        </p>
      <p>You clicked and random value from array: <h4>{count}</h4></p>
      <button onClick={cardDisplay}>
        Click me
      </button>
    </div>


  );
}

export default Card;
