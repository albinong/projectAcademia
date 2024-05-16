// Card.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import './App.css'; // Importa o App.css
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom
import universitarios1 from './assets/universitarios1.gif'; // Importa a imagem "universitarios1.gif" do diretório de assets
import training from './assets/training.jpg';  // Importa a imagem "training.jpg" do diretório de assets
import sejabenvindo1 from './assets/sejabenvindo1.gif';  // Importa a imagem "sejabenvindo1.gif" do diretório de assets

const Card = () => {

  return (
    <div className="leftcolumn"> {/* Define um contêiner com a classe "leftcolumn" */}
      {/* Conteúdo do componente Card */}
      <section className="card"> {/* Define um cartão com a classe "card" */}
        <h2 style={{ textAlign: 'center' }}>Seja bem-vindo a ACADEMIA DE ESTUDOS</h2> {/* Título "Seja bem-vindo a ACADEMIA DE ESTUDOS" centralizado */}
        <section className="fakeimg" style={{ height: '200px' }}> {/* Define um contêiner com a classe "fakeimg" e estiliza a altura para 200px */}
          <img src={universitarios1} alt="universitarios1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} /> {/* Insere a imagem "universitarios1" com estilos */}
        </section>
        <h3><Link to="/cursos">ACADEMIA DE ESTUDOS</Link></h3> {/* Cria um link para a página "Cursos" */}
        <p>É um prazer recebê-lo em nossa plataforma dedicada ao aprendizado e ao crescimento acadêmico. Aqui, você encontrará uma variedade de recursos e ferramentas para ajudá-lo em sua jornada educacional. Navegar em nossa academia é simples e gratificante. Aqui está uma breve visão das seções que temos disponíveis:</p> {/* Parágrafo de boas-vindas */}
        <img src={sejabenvindo1} alt="sejabenvindo1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} /> {/* Insere a imagem "sejabenvindo1" com estilos */}
      </section>


      <section className="card"> {/* Define outro cartão com a classe "card" */}
        <h2>Temos muito para si</h2> {/* Título "Temos muito para si" */}
        <section className="fakeimg" style={{ height: '200px' }}> {/* Define um contêiner com a classe "fakeimg" e estiliza a altura para 200px */}
          <img src={training} alt="training" style={{ width: '100%', height: '100%', objectFit: 'cover', border: '5px solid #800000' }} /> {/* Insere a imagem "training" com estilos */}
        </section>
        <p><strong>Dé uma leitura</strong></p>  {/* Parágrafo enfatizando "Dê uma leitura" */}
        <ol>
          <hr />{/* Linha horizontal */}
          <li><strong>Cursos </strong>: Explore nossa ampla gama de cursos, abrangendo diversas disciplinas e níveis de dificuldade. Desde <u>matemática até literatura</u>, temos algo para todos os interesses e níveis de habilidade <Link to="/cursos">Clique aqui</Link>.</li> {/* Item da lista com link para a página de "Cursos" */}
          <li> <strong>Recursos de Estudo</strong>: Encontre materiais úteis para complementar seus estudos. De guias de estudo a vídeos explicativos, estamos aqui para fornecer o suporte necessário para o seu sucesso acadêmico.</li> {/* Item da lista sobre recursos de estudo */}
          <li><strong>Comunidade</strong>: Junte-se a uma comunidade vibrante de estudantes e educadores que estão prontos para compartilhar conhecimento, experiências e dicas de estudo. Nossa comunidade é um espaço acolhedor e inclusivo, onde todos são  <i><b>incentivados a colaborar e crescer juntos</b></i>.</li> {/* Item da lista sobre a comunidade acadêmica */}
          <li><strong>Ferramentas de Aprendizagem</strong>: Explore nossas ferramentas interativas e recursos tecnológicos projetados para melhorar sua experiência de aprendizado. De quizzes a simuladores, estamos sempre inovando para oferecer as melhores oportunidades de aprendizado <Link to="/metodologia">Clique aqui</Link>.</li> {/* Item da lista com link para a página de "Metodologia" */}
          <hr /> {/* Linha horizontal */}
        </ol>
        <p>Sinta-se à vontade para explorar tudo o que nossa academia tem a oferecer. Estamos aqui para apoiá-lo em cada passo do seu caminho acadêmico. Seja bem-vindo e aproveite ao máximo sua jornada de aprendizado conosco!</p>{/* Parágrafo final */}
      </section>
    </div>
  );
}

export default Card; // Exporta o componente Card

