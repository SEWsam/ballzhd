import React from 'react';
import './App.css';
import Balls1 from './isaiah.png';
import Balls2 from './david.png';

let currentImage = Balls1

function handleImageClick() {
  if (currentImage === Balls1) {
    currentImage = Balls2
  } else if (currentImage === Balls2) {
    currentImage = Balls1
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={currentImage} onClick={handleImageClick} className="App-logo" alt="logo" />
        <p>
          BallzHD
        </p>
      </header>
    </div>
  );
}

export default App;
