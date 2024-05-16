// Navbar.js

import React from 'react'; // Importa o módulo React
import { Link } from 'react-router-dom'; // Importa o componente Link do pacote 'react-router-dom'
import './App.css'; // Importa os estilos globais da aplicação


// Definição do componente funcional Navbar
function Navbar() {
  return (
    <div className="topnav"> {/* Cria uma div com a classe "topnav" */}
      <Link to="/home">Home</Link> {/* Renderiza um link para a página Home */}
      <Link to="/metodologia">Metodologia</Link> {/* Renderiza um link para a página Metodologia */}
      <Link to="/exames">Exames</Link> {/* Renderiza um link para a página Exames */}
      <Link to="/cursos">Cursos</Link> {/* Renderiza um link para a página Cursos */}
      <Link to="/contacto">Contacto</Link> {/* Renderiza um link para a página Contacto */}
      <Link to="/sobre-nos">Sobre Nós</Link> {/* Renderiza um link para a página Sobre Nos */}
      <Link to="/login" style={{float: 'right'}}>Login</Link> {/* Renderiza um link para a página de Login com alinhamento à direita */}
    </div>
  );
}

export default Navbar; // Exporta o componente Navbar para uso em outras partes da aplicação