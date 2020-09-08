import React, { useState } from 'react';
import './App.css';

function Card(props) {

  const [count, setCount] = useState(0);

  const { anecdotes } = props;

  return (
    <div className="main">
      <img src='/img/backimg.png' className="card" alt="tarot card" />
      <p>
        Text the guy says
        </p>
      <p>You clicked and random value from array: <h4>{count}</h4></p>
      <button onClick={() => setCount(anecdotes[Math.floor(Math.random() * anecdotes.length)])}>
        Click me
      </button>
    </div>


  );
}

export default Card;
