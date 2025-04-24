import React, { useState, useEffect, useRef } from 'react';
import './Letreiro.css';

export default function Letreiro() {
  const [textoAtual, setTextoAtual] = useState('');
  const textoCompleto = 'Conheça a Fatec';
  const velocidade = 150;
  const [indice, setIndice] = useState(0);

  const intervaloRef = useRef(null);

  useEffect(() => {
    const digitarTexto = () => {
      intervaloRef.current = setInterval(() => {
        setTextoAtual((prevTexto) => prevTexto + textoCompleto[indice]);

        if (indice + 1 === textoCompleto.length) {
          clearInterval(intervaloRef.current);
          setTimeout(() => {
            setTextoAtual(''); 
            setIndice(0);
          }, 1000);
        } else {
          setIndice(indice + 1);
        }
      }, velocidade);
    };

    digitarTexto();

    return () => clearInterval(intervaloRef.current);
  }, [indice]);

  return (
    <div className="letreiro">
      <p>{textoAtual}</p>
    </div>
  );
}
