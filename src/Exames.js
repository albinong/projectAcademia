// Exames.js

import React, { useState } from 'react'; // Importa os hooks necessários do React
import { Link } from 'react-router-dom'; // Importa o componente Link para criar links entre páginas
import './App.css'; // Importa estilos globais
import './Exames.css'; // Importa estilos específicos para o componente
import alunos3 from './assets/alunos3.jpg'; // Importa uma imagem local para uso no componente

// Definição do componente funcional Exames
function Exames() {
  // Definição de estados utilizando o Hook useState
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  // Função para manipular o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();  // Previne o comportamento padrão do formulário
    // Validação do e-mail
    if (!validateEmail(email)) {
      setErroEmail('Por favor, insira um e-mail válido.');
      return;
    } else {
      setErroEmail('');
    }
    // Armazenar os dados no localStorage
    const formData = { nome, email, mensagem };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Limpar os campos do formulário após o envio
    setNome('');
    setEmail('');
    setMensagem('');

    // Exibir um alerta
    window.alert(`Ola 😊😊!${nome}, a sua mensagem de Exames de Concurso foi recebida com sucesso.`);
    window.alert('A tua mensagem esta em Amazenamento Local');
  };

  // Função para validar o formato do e-mail
  const validateEmail = (email) => {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
    return re.test(email);
  };

  // Renderização do componente Exames
  return (
    <div className="headerfoto">
      <img src={alunos3} alt="Alunos3" /> {/* Exibe a imagem importada */}
      <header>Exames de Concurso</header>

      {/* Seções com informações sobre os exames de concurso */}
      <section>
        <h2>Próximas Datas de Exames</h2>
        <p>Confira as próximas datas para os exames de concurso, incluindo GNR, Polícia Nacional, Tropas e Fuzileiros.</p>
      </section>

      <section>
        <h2>Requisitos</h2>
        <p>Descubra os requisitos necessários para participar nos exames de cada concurso.</p>
      </section>

      <section>
        <h2>Fases do Concurso</h2>
        <p>Conheça as diferentes fases do processo de concurso, desde a inscrição até a avaliação final.</p>
      </section>

      <section>
        <h2>Programa de Estudos</h2>
        <p>Explore o programa de estudos recomendado para se preparar eficazmente para os exames.</p>
      </section>

      <section>
        <h2>Entre em Contato</h2>
        <Link to="/contacto">Clique aqui</Link> {/* Link para a página de contato */}

        {/* Formulário para enviar mensagens */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder='Digine o seu nome:' required value={nome} onChange={(e) => setNome(e.target.value)} />

          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder='Digine o seu e-mail:' required value={email} onChange={(e) => setEmail(e.target.value)} />
          {erroEmail && <div className="error-message">{erroEmail}</div>}

          <label htmlFor="message"></label>
          <textarea id="message" name="message" placeholder='Escreva aqui a sua mensagem:' rows="4" required value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>

      {/* Botão de voltar */}
      <div className="back-button">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>VOLTAR</Link>
      </div>
    </div>
  );
}

// Exporta o componente Exames para uso em outras partes da aplicação
export default Exames;
