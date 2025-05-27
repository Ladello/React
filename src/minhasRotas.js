import { Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Atv01 from "./exercicios/atv01"; 
import Atv02 from "./exercicios/atv02"; 
import Atv03 from "./exercicios/atv03"; 
import Atv04 from "./exercicios/atv04"; 

export default function MinhasRotas(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atv01" element={<Atv01 />} />
            <Route path="/atv02" element={<Atv02 />} />
            <Route path="/atv03" element={<Atv03 />} />
            <Route path="/atv04" element={<Atv04 />} />
        </Routes>
    );
}
