import React, { useState } from 'react';
import './App.css';

function Card(props) {

  const cardList = [
    {
      cardName: 'Name of the card',
      cardPicture: '/img/backimg.png',
      dialogue: ['option a', 'option b', 'option c'],
    },
    {
      cardName: 'Name of the card 2',
      cardPicture: '/img/backimg.png',
      dialogue: ['option 0', 'option 1', 'option 2'],
    },
  ];

  // console.log(articles[1].dialogue[1])

  const [dialogue, setDialogue] = useState(0);
  const [card, setCard] = useState(0);
  const [clicked, setClicked] = useState(false);

  // const { anecdotes } = props;

  const cardDisplay = () => {
    setClicked(true);
    if (!clicked) {
      setCard([Math.floor(Math.random() * 2)])
      setDialogue([Math.floor(Math.random() * 3)])
    }
  }

  console.log(card)
  console.log(cardList[card].dialogue[dialogue])

  return (
    <div className="main">

      <img src='/img/backimg.png' className="card" alt="tarot card" />
      <p>Text the guy says, card = {card}, dialogue = {dialogue}</p>
      <p>You clicked and random value from array: {dialogue}</p>
      <button onClick={cardDisplay}>
        Click me
      </button>
    </div>

  );
}

export default Card;