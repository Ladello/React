import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Atv01 from "./exercicios/atv01"; 
import Atv02 from "./exercicios/atv02"; 

export default function MinhasRotas(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atv01" element={<Atv01 />} />
            <Route path="/atv02" element={<Atv02 />} />
        </Routes>
    );
}
