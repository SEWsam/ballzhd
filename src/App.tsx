import React, { useState } from 'react';
import { cursorTo } from 'readline';
import './App.css';
import Balls2 from './david.png';
import Balls1 from './isaiah.jpg';



function App() {
  let usingAltImage = false
  const [imgSrc, setImgSrc] = useState(Balls1);

  const handleImageClick = () => {
    if (!usingAltImage) {
      setImgSrc(Balls2)
      usingAltImage = true
    } else {
      setImgSrc(Balls1)
      usingAltImage = false
    }
  }
  return (
    <div className="App">
      <header className="App-header"  onClick={handleImageClick} >
        <img src={imgSrc}  className="App-logo" alt="logo" />
        <p>
          BallzHD
        </p>
      </header>
    </div>
  );
}

export default App;
