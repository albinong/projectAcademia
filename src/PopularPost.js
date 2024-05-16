// PopularPost.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import './App.css'; // Importa o App.css
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom
import universitarios1 from './assets/universitarios1.gif'; // Importa a imagem universitarios1 do diretório 'assets'
import fuzileiros from './assets/fuzileiros.jpg'; // Importa a imagem fuzileiros do diretório 'assets'
import gnr from './assets/gnr.gif'; // Importa a imagem  gnr do diretório 'assets'

// Declaração do componente funcional PopularPost utilizando arrow function
const PopularPost = () => {
    return (
      <div className="row" style={{ width: '100%' }}> {/* Cria uma div com a classe "row" */}
        <div className="rightcolumn" style={{ width: '100%' }}> {/* Cria uma div com a classe "rightcolumn" */}
          <div className="card"> {/* Cria uma div com a classe "card" */}
            <h3>Post Popular</h3> {/* Título "Post Popular" */}
            <p>Clique em uma das nossas imagens, para mais informação</p>
            <Link to="/metodologia">
              <div className="fakeimg"> {/* Cria uma div com a classe "fakeimg" para imagens fictícias */}
                <img src={universitarios1} alt="universitarios1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Insere a imagem universitarios1 com estilos específicos */}
              </div>
            </Link>
            <Link to="/metodologia">
              <div className="fakeimg"> {/* Outra div com a classe "fakeimg" */}
                <img src={fuzileiros} alt="fuzileiros" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />  {/* Insere a imagem fuzileiros com estilos específicos */}
              </div>
            </Link>
            <Link to="/metodologia">
              <div className="fakeimg"> {/* Outra div com a classe "fakeimg" */}
                <img src={gnr} alt="gnr" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> {/* Insere a imagem gnr com estilos específicos */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default PopularPost; // Exporta o componente PopularPost para uso em outras partes da aplicação