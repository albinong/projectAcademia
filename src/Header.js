// Header.js

import React from 'react'; //Essa declaração importa o módulo React do pacote 'react', possibilitando o uso da sintaxe JSX dentro do arquivo
import './App.css';  // Importa estilos globais
import Slideshow from './Slideshow'; // Importa o componente Slideshow

function Header() {
  return (
    <div className="headerfoto"> {/* Define a classe CSS para o estilo do cabeçalho */}
       <Slideshow /> {/* Renderiza o componente Slideshow dentro do cabeçalho */}
    </div>
  );
}

export default Header; // Exporta o componente Header para uso em outras partes da aplicação
