import React from 'react';
import Letreiro from './Letreiro';
import Relogio from './Relogio';
import {Link} from "react-router-dom"


export default function Atv01() {
  return (
    <div>
      <h2>Atividade 01</h2>
      <Letreiro />
      <Relogio />
      <br />
      <Link to="/">Acesse a home</Link>
    </div>
  );
}
