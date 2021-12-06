import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';
import Portfolio from './componentes/Portfolio';
import Precos from './componentes/Precos';
import Contatos from './componentes/Contatos';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />
        <Routes>
          <Route path='/' exact element={<Inicio />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/precos' element={<Precos />} />
          <Route path='/contatos' element={<Contatos />} />
        </Routes>
        <Rodape />          
      </div>
    </BrowserRouter>
  
  );
}

export default App;
