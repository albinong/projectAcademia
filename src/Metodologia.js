// Metodologia.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import './App.css'; // Importa o App.css
import './Metodologia.css' // Importa os estilos específicos para o componente Metodologia
import { Link } from 'react-router-dom'; // Importa o componente Link do pacote 'react-router-dom'
import alunos2 from './assets/alunos2.jpg'; // Importa a imagem alunos2 do diretório 'assets'

// Definição do componente funcional Metodologia
function Metodologia() {
    return (
        <div className="headerfoto"> {/* Cria uma div com a classe "headerfoto" */}

            <section id="metodologia"> {/* Cria uma seção com id "metodologia" */}
                <img src={alunos2} alt="Alunos2" />  {/* Insere a imagem alunos2 com um texto alternativo */}
                <h1>Metodologia de Ensino</h1> {/* Título principal da seção "Metodologia de Ensino" */}

                <h2>Horário das Aulas</h2> {/* Título "Horário das Aulas" */}
                <table> {/* Cria uma tabela para exibir o horário das aulas */}
                    <thead> {/* Cabeçalho da tabela */}
                        <tr>
                            <th>Dia da Semana</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    <tbody> {/* Corpo da tabela */}
                        <tr>
                            <td>Segunda-feira</td>
                            <td>09:00 - 12:00</td>
                        </tr>
                        <tr>
                            <td>Quarta-feira</td>
                            <td>14:00 - 17:00</td>
                        </tr>
                    </tbody>
                </table>

                 {/* Outros títulos e parágrafos explicativos sobre a metodologia de ensino */}
                <h2>Metodologia de Ensino</h2>
                <p>Nossa metodologia de ensino é baseada em aulas presenciais, material didático inovador, e suporte individualizado. As aulas são projetadas para proporcionar uma experiência educacional enriquecedora.</p>

                <h2>Tutoriais Interativos</h2>
                <p>Além das aulas, oferecemos tutoriais interativos online para reforçar o aprendizado. Os alunos têm acesso a recursos multimídia, exercícios práticos e suporte de instrutores especializados.</p>

                <h2>Acompanhamento Personalizado</h2>
                <p>Entendemos que cada aluno é único. Por isso, fornecemos acompanhamento personalizado para garantir que cada estudante atinja seu potencial máximo. Nossos instrutores estão sempre disponíveis para esclarecer dúvidas e oferecer orientação.</p>
            </section>

            {/* Botão de voltar */}
            <div className="back-button">  {/* Cria uma div com a classe "back-button" */}
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>VOLTAR</Link> {/* Renderiza um link para voltar à página inicial */}
            </div>
        </div>
    );

}

export default Metodologia; // Exporta o componente Metodologia para uso em outras partes da aplicação