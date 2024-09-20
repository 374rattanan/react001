import React, { useState } from 'react';
import './App.css'; 

function PigGame() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 

  const feedPig = (amount) => {
    const newLevel = level + amount;
    setLevel(newLevel);
    setSize(size + amount * 2); 
  };

  const pigImage = level >= 100 
    ? 'https://s.isanook.com/ns/0/ui/1910/9550354/458670846_823932026583972_458013437655576732_n.jpg' 
    : 'https://s.isanook.com/ns/0/ui/1910/9550354/457744328_820140553629786_3867345710914349252_n.jpg'; 

  return (
    <div className="game-container">
      <h2 className="game-title">เกมส์เลี้ยงหมูเด้ง</h2>
      <img 
        src={pigImage}  
        className="pig-image"
        style={{ width: `${size}px`, height: `${size}px` }} 
      />
      <div className="food-buttons">
        <button onClick={() => feedPig(5)} className="food-button">
          <img src="https://i.pinimg.com/564x/b3/6d/77/b36d77c17048779b7e74b64dfdf76977.jpg" alt="แตงโม" className="food-image" />
        </button>
        <button onClick={() => feedPig(10)} className="food-button">
          <img src="https://i.pinimg.com/564x/ad/73/31/ad7331ea1716e368f19848b1c71f4ccd.jpg" alt="ฟักทอง" className="food-image" />
        </button>
        <button onClick={() => feedPig(20)} className="food-button">
          <img src="https://i.pinimg.com/564x/2f/22/0b/2f220b76324dacb02ffb05290516b523.jpg" alt="หญ้า" className="food-image" />
        </button>
      </div>

      {}
      <div className="level-container">
        <h2 className="level">Level: {level}</h2>
      </div>
    </div>
  );
}

export default PigGame;
