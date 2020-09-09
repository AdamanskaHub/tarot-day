import React, { useState } from 'react';
import './App.css';

function Card(props) {

  const cardList = [
    {
      cardName: 'Name of the card',
      cardPicture: '/img/soleil.png',
      dialogue: ['option a', 'option b', 'option c'],
    },
    {
      cardName: 'Name of the card 2',
      cardPicture: '/img/lune.png',
      dialogue: ['option 0', 'option 1', 'option 2'],
    },
  ];

  const [dialogue, setDialogue] = useState('default text');
  const [card, setCard] = useState(0);
  const [cardImg, setCardImg] = useState('/img/backimg.png')
  const [clicked, setClicked] = useState(false);

  // const { anecdotes } = props;

  const cardDisplay = () => {
    console.log("ACTIVATED THE CLICK")
    setClicked(true);
    if (!clicked) {
      setCard([Math.floor(Math.random() * 2)])
      setDialogue([Math.floor(Math.random() * 3)])
      setCardImg(cardList[card].cardPicture)
    }
  }

  console.log(card)
  console.log(cardList[card].dialogue[dialogue])

  return (
    <div className="main">

      <img src={cardImg} className="card" alt="tarot card" />
      <p>Text the guy says, card = {card}, dialogue = {dialogue}, img = {cardImg}</p>
      <button onClick={cardDisplay}>
        Click me
      </button>

      <div className="bubble">

        <div className="bubble-border" />
        <div className="bubble-main">
          {dialogue}
        </div>
        <div className="bubble-border" />


      </div>

    </div>

  );
}

export default Card;