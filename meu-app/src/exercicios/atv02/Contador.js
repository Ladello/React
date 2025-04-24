import React from 'react';
import './Contador.css';

export default function Contador({ nome, imgSrc, valor, onIncrement, onDecrement }) {
  return (
    <div className="contador">
      <img src={imgSrc} alt={nome} className="contador-img" />
      <div className="contador-info">
        <h4>{nome}</h4>
        <div className="contador-buttons">
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
        </div>
        <input type="text" value={valor} readOnly className="contador-input" />
      </div>
    </div>
  );
}
