import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../paginas/Main/Home';
import Sabores from '../paginas/Main/Sabores';
import Sobre from '../paginas/Main/Sobre';

export default function Rotas() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sabores' element={<Sabores />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}