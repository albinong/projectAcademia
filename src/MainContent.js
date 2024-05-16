// MainContent.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import Card from './Card'; // Importa o componente Card do arquivo 'Card.js'
import AboutMe from './AboutMe'; // Importa o componente AboutMe do arquivo 'AboutMe.js'
import PopularPost from './PopularPost'; // Importa o componente PopularPost do arquivo 'PopularPost.js'
import FollowMe from './FollowMe'; // Importa o componente FollowMe do arquivo 'FollowMe.js'


// Definição do componente funcional MainContent
function MainContent() {
  return (
    <div className="row"> {/* Cria uma div com a classe "row" para o layout */}
      <div className="leftcolumn"> {/* Cria uma div com a classe "leftcolumn" para o conteúdo da coluna esquerda */}
        <Card title="TITLE HEADING" date="Title description, Dec 7, 2017" /> {/* Renderiza o componente Card com os títulos e datas específicos */}
      </div>
      <div className="rightcolumn"> {/* Cria uma div com a classe "rightcolumn" para o conteúdo da coluna direita */}
        <AboutMe /> {/* Renderiza o componente AboutMe para exibição do perfil do autor */}
        <PopularPost /> {/* Renderiza o componente PopularPost para exibição de postagens populares */}
        <FollowMe /> {/* Renderiza o componente FollowMe para exibição de botões de seguir nas redes sociais */}
      </div>
    </div>
  );
}

export default MainContent; // Exporta o componente MainContent para uso em outras partes da aplicação