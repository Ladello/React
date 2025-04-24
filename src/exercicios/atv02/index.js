import React from 'react';
import App from './App';
import {Link} from "react-router-dom"

export default function Atv02() {
  return (
    <div>
      <h2>Atividade 02</h2>
      <App />
      <br />
      <Link to="/">Acesse a home</Link>
    </div>
  );
}
