import React, { useEffect } from 'react';
import './Relogio.css';

export default function Relogio() {

  const atualizarRelogio = () => {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const horario = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').textContent = horario;
  };

  useEffect(() => {
    atualizarRelogio();

    setInterval(atualizarRelogio, 1000);
  }, []);

  return (
    <div>
      <div id="relogio" className="relogio"></div>
    </div>
  );
}
