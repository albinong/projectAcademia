// App.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import { Route, Routes } from 'react-router-dom'; // Importa o componente Route e Routes do react-router-dom
import './App.css'; // Importa o componente App.css


import Header from './Header'; // Importa o componente Header
import Navbar from './Navbar'; // Importa o componente Navbar
import MainContent from './MainContent'; // Importa o componente MainContent
import Footer from './Footer'; // Importa o componente Footer
import Home from './Home'; // Importa o componente Home
import Metodologia from './Metodologia'; // Importa o componente Metodologia
import Exames from './Exames'; // Importa o componente Exames
import Cursos from './Cursos'; // Importa o componente Cursos
import Contacto from './Contacto'; // Importa o componente Contacto
import Login from './Login'; // Importa o componente Login
import SobreNos from './SobreNos'; // Importa o componente SobreNos

function App() {
  return (
    <div>
        <Header /> {/* Renderiza o componente Header */}
        <Navbar /> {/* Renderiza o componente Navbar */}
        <Routes> {/* Define as rotas para o aplicativo */}
          <Route path="/" element={<MainContent/>} /> {/* Rota para a página inicial */}
          <Route path="/home/*" element={<Home/>} /> {/* Rota para a página Home e suas sub-rotas */}
          <Route path="/metodologia" element={<Metodologia/>} /> {/* Rota para a página Metodologia */}
          <Route path="/exames" element={<Exames/>} /> {/* Rota para a página Exames */}
          <Route path="/cursos" element={<Cursos/>}  /> {/* Rota para a página Cursos */}
          <Route path="/contacto" element={<Contacto/>} /> {/* Rota para a página Contacto */}
          <Route path="/login" element={<Login/>} /> {/* Rota para a página Login */}
          <Route path="/sobre-nos" element={<SobreNos/>} /> {/* Rota para a página SobreNos */}
          <Route path="*" element={<>404</>} /> {/* Rota para qualquer outra URL não mapeada */}
        </Routes>
        <Footer /> {/* Renderiza o componente Footer */}
    </div>
  );
}

export default App; // Exporta o componente App