// AboutMe.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
// Importa o módulo React, que é necessário para criar componentes React
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom
import universidade from './assets/universidade.gif'; //Importa a imagem "universidade.gif" do diretório de assets

const AboutMe = () => {
    return (
        <div className="row" style={{ width: '100%'}}> {/* Define um contêiner com a classe "row" */}
            <div className="rightcolumn" style={{ width: '100%'}}>
                {/* Conteúdo da página Sobre Mim */}
                <div className="red" > {/*Define um cartão com a classe "card"*/}
                    <h2 style={{ color: 'green' }}>Sobre nós</h2> {/*Título "Sobre nós"*/}
                    <div className="fakeimg" style={{ height: '100px' }}> {/*// Define um contêiner com a classe "fakeimg" e estiliza a altura para 100px*/}
                        <img src={universidade} alt="universidade" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> {/* // Insere a imagem "universidade" com estilos para cobrir o contêiner*/}
                    </div>
                    <p>Nossa <Link to="/cursos">ACADEMIA </Link>oferece uma ampla gama de cursos cuidadosamente projetados, ministrados por educadores experientes e apaixonados.</p> {/*Parágrafo descrevendo a academia*/}
                </div>
            </div>
        </div>
    );
}

export default AboutMe; // Exporta o componente "AboutMe"
