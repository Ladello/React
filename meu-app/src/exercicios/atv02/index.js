import React, { useState } from 'react';
import Contador from './Contador';
import './index.css'; // Alterei para usar index.css que é o seu estilo padrão

export default function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => setHomens(homens - 1);

  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => setMulheres(mulheres - 1);

  return (
    <div className="atv02-container">
      <h2>Atividade 02</h2>
      <div className="contador-box">
        <Contador
          nome="Homens"
          imgSrc="https://cdn4.iconfinder.com/data/icons/eldorado-navigation/40/human-512.png"
          valor={homens}
          onIncrement={incrementarHomens}
          onDecrement={decrementarHomens}
        />
        <Contador
          nome="Mulheres"
          imgSrc="https://cdn4.iconfinder.com/data/icons/eldorado-navigation/40/woman-512.png"
          valor={mulheres}
          onIncrement={incrementarMulheres}
          onDecrement={decrementarMulheres}
        />
      </div>
      <div className="total-container">
        <h3>Total: {homens + mulheres}</h3>
      </div>
    </div>
  );
}
