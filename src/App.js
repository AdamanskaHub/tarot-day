import React, { useState } from 'react';
import Card from './Card'
import './App.css';

function App() {


  return (
    <div className="App">

      <Card anecdotes={[1, 4, 3, 2, 8, 5]} />


    </div>
  );
}

export default App;
