// SobreNos.js

import React from 'react'; // Importa o módulo React, que é necessário para criar componentes React
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom
import './App.css'; // Importa o arquivo de estilos CSS para o componente

// Define o componente funcional SobreNos
const SobreNos = () => {
    return (
        // Início do container principal do componente
        <div className="sobre-nos-container">
            {/* Título "Sobre Nós" */}
            <h2 className="sobre-nos-title">Sobre Nós</h2>
            {/* Texto introdutório */}
            <p className="sobre-nos-text">Bem-vindo à nossa <strong>ACADEMIA DE ESTUDOS!</strong> Aqui na nossa academia, estamos empenhados em fornecer um ambiente de aprendizagem estimulante e acolhedor para todos os nossos alunos.</p>
            <p>Nossa equipe de instrutores altamente qualificados está aqui para ajudá-lo a alcançar seus objetivos acadêmicos. Seja você <i><b>um estudante buscando reforço escolar, um universitário se preparando para exames importantes, ou alguém em busca de aprender algo novo</b></i>, estamos aqui para apoiá-lo em cada etapa do caminho.</p>
            <p>Na nossa academia, valorizamos a excelência acadêmica, a colaboração e o crescimento pessoal. Oferecemos uma ampla gama de cursos e recursos educacionais para atender às necessidades individuais de cada aluno.</p>
            <hr />
            <p>Além disso, estamos comprometidos com a inovação e o uso de tecnologia de ponta para melhorar a experiência de aprendizagem dos nossos alunos. Nosso objetivo é prepará-lo não apenas para ter sucesso nos seus estudos, mas também para enfrentar os desafios do mundo moderno.</p>
            {/* Conteúdo sobre exames de concursos */}
            <p>Nossa academia oferece preparação para diversos exames de concursos, incluindo:</p>

            {/* Lista de exames de concursos */}
            <ul>
                <li><hr /><strong> - GNR (Guarda Nacional Republicana)</strong>
                    <p>A Guarda Nacional Republicana (GNR) é uma força de segurança de natureza militar em Portugal. Ela desempenha diversas funções, incluindo policiamento de áreas rurais, patrulhamento rodoviário, segurança de fronteiras, entre outras. A GNR é responsável por manter a ordem pública e garantir a segurança dos cidadãos portugueses, trabalhando em estreita colaboração com outras autoridades policiais e agências de segurança</p>
                </li>
                <li><strong> - Policia Nacional</strong>
                    <p>A Polícia de Segurança Pública (PSP), comumente conhecida como Polícia Nacional, é a principal força policial de Portugal responsável pela manutenção da ordem pública em áreas urbanas, prevenção e investigação de crimes, controle de multidões, entre outras atribuições. A PSP desempenha um papel fundamental na aplicação da lei e na proteção dos cidadãos dentro das cidades portuguesas</p>
                </li>
                <li><strong> - Tropas</strong>
                    <p>As Tropas em Portugal referem-se às forças militares terrestres do país. Elas são responsáveis por operações militares, defesa nacional e participação em missões internacionais de paz. As Tropas portuguesas são treinadas e equipadas para lidar com uma variedade de situações, desde operações de combate até missões de ajuda humanitária</p>
                </li>
                <li><strong> - Fuzileiros</strong>
                <p>Os Fuzileiros Navais Portugueses são uma unidade especializada da Marinha Portuguesa. Eles são treinados para operar em ambientes marítimos, terrestres e aéreos, sendo capazes de realizar uma variedade de missões, como assalto anfíbio, reconhecimento, resgate de reféns, entre outras. Os Fuzileiros desempenham um papel vital na defesa da soberania marítima de Portugal e na proteção de interesses nacionais dentro e fora do país</p><hr />
                </li>
            </ul>
            {/* Link para saber mais sobre os cursos */}
            <Link to="/cursos">Saber mais... </Link>
            {/* Parágrafo final */}
            <p>Nossos cursos são cuidadosamente elaborados para abordar todos os aspectos desses exames, garantindo que nossos alunos estejam totalmente preparados para enfrentar os desafios e alcançar o sucesso.</p>
            {/* Parágrafo de encerramento */}
            <p>Estamos ansiosos para ajudá-lo a alcançar todo o seu potencial acadêmico. Junte-se a nós na nossa jornada de aprendizagem!</p>
            
            {/* Botão de voltar */}
            <div className="back-button">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>VOLTAR</Link>{/* Cria um link para voltar à página inicial */}
            </div>
        </div>
    );
}

export default SobreNos; // Exporta o componente SobreNos para uso em outras partes da aplicação
