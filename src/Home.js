// Home.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import { Route, Routes, Navigate } from 'react-router-dom'; // Importa componentes e utilitários de roteamento do react-router-dom
import './App.css'; //Importa o App.css


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />{/* Define a rota padrão e redireciona para a página principal */}
        </Routes>
        
    </div>
  );
}

export default App; // Exporta o componente Home para uso em outras partes da aplicação