import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import ReactDOM from 'react-dom/client'; // Importa o módulo ReactDOM do pacote 'react-dom/client'
import './index.css'; // Importa estilos globais
import App from './App'; // Importa o componente App
import reportWebVitals from './reportWebVitals'; // Importa a função reportWebVitals para medir o desempenho da web
import {BrowserRouter as Router} from "react-router-dom" // Importa o componente BrowserRouter e o renomeia como Router


// Cria um ponto de entrada para a renderização React
const root = ReactDOM.createRoot(document.getElementById('root')); // Cria um ponto de entrada para a renderização React no elemento com o ID 'root'
root.render( // Renderiza o aplicativo dentro do ponto de entrada
  <React.StrictMode> {/* Ativa o strict mode para identificar e corrigir problemas potenciais */}
    <Router> {/* Define o roteador para a aplicação */}
    <App /> {/* Renderiza o componente App dentro do roteador */}
    </Router>
  </React.StrictMode> // Chama a função reportWebVitals para medir o desempenho da web
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
