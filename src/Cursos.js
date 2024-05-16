// Cursos.js

import React, { useState, useEffect } from 'react'; // Importa os hooks necessários do React
import { Link } from 'react-router-dom'; // Importa o componente Link para criar links entre páginas
import './App.css'; // Importa os arquivos de estilo CSS para o componente App
import './Cursos.css'; // Importa os arquivos de estilo CSS para o componente Cursos
import alunos4 from './assets/alunos4.jpg'; // Importa a imagem "alunos4" do diretório de ativos

// Declaração do componente funcional "Cursos"
function Cursos() {

    // ... Define estados de clique semelhantes para outros botões "Saber mais...
    const [clickCountUm, setClickCountUm] = useState(0);
    const [clickCountDois, setClickCountDois] = useState(0);
    const [clickCountTres, setClickCountTres] = useState(0);
    const [clickCountQuatro, setClickCountQuatro] = useState(0);
    const [clickCountCinco, setClickCountCinco] = useState(0);
    const [clickCountSeis, setClickCountSeis] = useState(0);
    const [clickCountSete, setClickCountSete] = useState(0);
    const [clickCountOito, setClickCountOito] = useState(0);
    const [clickCountNove, setClickCountNove] = useState(0);
    const [clickCountDez, setClickCountDez] = useState(0);
    const [clickCountOnze, setClickCountOnze] = useState(0);
    const [clickCountDoze, setClickCountDoze] = useState(0);
    const [clickCountTreze, setClickCountTreze] = useState(0);
    const [clickCountCatorze, setClickCountCatorze] = useState(0);
    const [clickCountQuinze, setClickCountQuinze] = useState(0);
    const [clickCountDezesseis, setClickCountDezesseis] = useState(0);
    const [clickCountDezessete, setClickCountDezessete] = useState(0);
    const [clickCountDezoito, setClickCountDezoito] = useState(0);
    const [clickCountDezanove, setClickCountDezanove] = useState(0);
    const [clickCountVinte, setClickCountVinte] = useState(0);
    const [clickCountVinteum, setClickCountVinteum] = useState(0);
    const [clickCountVintedois, setClickCountVintedois] = useState(0);
    const [clickCountVintetres, setClickCountVintetres] = useState(0);
    const [clickCountVintequatro, setClickCountVintequatro] = useState(0);
    const [clickCountVintecinco, setClickCountVintecinco] = useState(0);
    const [clickCountVinteseis, setClickCountVinteseis] = useState(0);
    const [clickCountVintesete, setClickCountVintesete] = useState(0);
    const [clickCountVinteoito, setClickCountVinteoito] = useState(0);
    const [clickCountVintenove, setClickCountVintenove] = useState(0);
    const [clickCountTrinta, setClickCountTrinta] = useState(0);

    // Define funções para atualizar o estado de clique para cada botão "Saber mais..."
    const toggleMessageUm = () => {
        setClickCountUm(prevCount => prevCount + 1);
    };

    const toggleMessageDois = () => {
        setClickCountDois(prevCount => prevCount + 1);
    };

    const toggleMessageTres = () => {
        setClickCountTres(prevCount => prevCount + 1);
    };

    const toggleMessageQuatro = () => {
        setClickCountQuatro(prevCount => prevCount + 1);
    };

    const toggleMessageCinco = () => {
        setClickCountCinco(prevCount => prevCount + 1);
    };

    const toggleMessageSeis = () => {
        setClickCountSeis(prevCount => prevCount + 1);
    };

    const toggleMessageSete = () => {
        setClickCountSete(prevCount => prevCount + 1);
    };

    const toggleMessageOito = () => {
        setClickCountOito(prevCount => prevCount + 1);
    };

    const toggleMessageNove = () => {
        setClickCountNove(prevCount => prevCount + 1);
    };

    const toggleMessageDez = () => {
        setClickCountDez(prevCount => prevCount + 1);
    };

    const toggleMessageOnze = () => {
        setClickCountOnze(prevCount => prevCount + 1);
    };

    const toggleMessageDoze = () => {
        setClickCountDoze(prevCount => prevCount + 1);
    };

    const toggleMessageTreze = () => {
        setClickCountTreze(prevCount => prevCount + 1);
    };

    const toggleMessageCatorze = () => {
        setClickCountCatorze(prevCount => prevCount + 1);
    };

    const toggleMessageQuinze = () => {
        setClickCountQuinze(prevCount => prevCount + 1);
    };

    const toggleMessageDezesseis = () => {
        setClickCountDezesseis(prevCount => prevCount + 1);
    };

    const toggleMessageDezessete = () => {
        setClickCountDezessete(prevCount => prevCount + 1);
    };

    const toggleMessageDezoito = () => {
        setClickCountDezoito(prevCount => prevCount + 1);
    };

    const toggleMessageDezanove = () => {
        setClickCountDezanove(prevCount => prevCount + 1);
    };

    const toggleMessageVinte = () => {
        setClickCountVinte(prevCount => prevCount + 1);
    };

    const toggleMessageVinteum = () => {
        setClickCountVinteum(prevCount => prevCount + 1);
    };

    const toggleMessageVintedois = () => {
        setClickCountVintedois(prevCount => prevCount + 1);
    };

    const toggleMessageVintetres = () => {
        setClickCountVintetres(prevCount => prevCount + 1);
    };

    const toggleMessageVintequatro = () => {
        setClickCountVintequatro(prevCount => prevCount + 1);
    };

    const toggleMessageVintecinco = () => {
        setClickCountVintecinco(prevCount => prevCount + 1);
    };

    const toggleMessageVinteseis = () => {
        setClickCountVinteseis(prevCount => prevCount + 1);
    };

    const toggleMessageVintesete = () => {
        setClickCountVintesete(prevCount => prevCount + 1);
    };

    const toggleMessageVinteoito = () => {
        setClickCountVinteoito(prevCount => prevCount + 1);
    };

    const toggleMessageVintenove = () => {
        setClickCountVintenove(prevCount => prevCount + 1);
    };

    const toggleMessageTrinta = () => {
        setClickCountTrinta(prevCount => prevCount + 1);
    };

    //lOCALIZAÇÃO
    const [userLocation, setUserLocation] = useState(null);  // Definindo a variável userLocation e inicializando com useState

    // Obtém a localização atual do usuário
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });
        } else {
            setUserLocation(null);
        }
    }, []);



    return (
        <div className="headerfoto">
            <img src={alunos4} alt="Alunos4" />
            <div className='cursos-css'>
                <header className="cursos-header">SAIBA MAIS NOSSOS CURSOS</header>
                <div>
                    {/* Lista de informações sobre a academia e seus cursos */}
                    <ul>
                        <li>
                            <h3>Bem-vindo à nossa Academia de Estudos!</h3>
                            <p>Na nossa Academia de Estudos, estamos comprometidos em fornecer uma experiência educacional excepcional e transformadora para todos os nossos alunos. Nossa missão é inspirar, capacitar e preparar os alunos para alcançar o sucesso acadêmico e pessoal.</p>
                        </li>
                        <li>
                            <h3>Sobre a Academia de Estudos</h3>
                            <p>Nossa academia oferece uma ampla gama de cursos cuidadosamente projetados, ministrados por educadores experientes e apaixonados. Com um foco enraizado na excelência acadêmica, oferecemos suporte individualizado para garantir que cada aluno atinja seu pleno potencial.</p>
                        </li>
                        <li>
                            <h3>Nossos Cursos</h3>
                            <p>Na Academia de Estudos, oferecemos uma variedade de cursos projetados para atender às necessidades e interesses de nossos alunos. Desde matérias fundamentais até disciplinas mais especializadas, nossos cursos são desenvolvidos para promover o pensamento crítico, a criatividade e a resolução de problemas.</p>
                        </li>
                        <li>
                            <h3>Nossa Abordagem Educacional</h3>
                            <p>Nossa abordagem educacional é centrada no aluno, priorizando o desenvolvimento holístico e fornecendo um ambiente de aprendizado estimulante. Valorizamos a colaboração, a comunicação eficaz e a autodisciplina, preparando nossos alunos para os desafios do mundo real.</p>
                        </li>
                        <li>
                            <h3>Junte-se a Nós!</h3>
                            <p>Se você está em busca de uma educação de qualidade que vá além das salas de aula tradicionais, a Academia de Estudos é o lugar certo para você. Estamos dedicados a nutrir mentes brilhantes e a preparar os líderes do amanhã.Não hesite em explorar nossos cursos e descobrir como podemos ajudá-lo a alcançar o sucesso acadêmico e além. Estamos ansiosos para embarcar nesta jornada educacional com você!</p>
                        </li>
                    </ul>
                </div>
                <br />
                <div className="row" >
                    <h1 >Oferta Formativa</h1>
                    <div>
                        <ul>
                            {/* Lista de tipos de cursos com botões "Saber mais..." e informações específicas */}
                            <li>Licenciatura</li>
                            <button onClick={toggleMessageUm}>Saber mais...</button>
                            <p id="saberMais1">{clickCountUm % 2 === 1 ? 'É um curso de graduação que confere o título de bacharel ou licenciado em uma área específica do conhecimento, como administração, ciências, artes, etc.' : ''}</p>

                            <li>Mestrado</li>
                            <button onClick={toggleMessageDois}>Saber mais...</button>
                            <p id="saberMaisDois">{clickCountDois % 2 === 1 ? ': É um curso de pós-graduação que aprofunda os conhecimentos adquiridos na graduação. Geralmente, exige a realização de uma pesquisa acadêmica e a defesa de uma dissertação.' : ''}</p>

                            <li>Doutoramento</li>
                            <button onClick={toggleMessageTres}>Saber mais...</button>
                            <p id="saberMaisTres">{clickCountTres % 2 === 1 ? 'Também conhecido como doutorado, é o mais alto nível de educação acadêmica. Envolve a realização de pesquisa original e a redação de uma tese.' : ''}</p>

                            <li>Pós-Graduação</li>
                            <button onClick={toggleMessageQuatro}>Saber mais...</button>
                            <p id="saberMaisQuatro">{clickCountQuatro % 2 === 1 ? 'Termo genérico que engloba tanto os cursos de mestrado quanto de doutorado, assim como especializações e cursos de aperfeiçoamento profissional.' : ''}</p>

                            <li>TeSP</li>
                            <button onClick={toggleMessageCinco}>Saber mais...</button>
                            <p id="saberMaisCinco">{clickCountCinco % 2 === 1 ? '(Cursos Técnicos Superiores Profissionais): São cursos superiores com uma componente mais prática e técnica, projetados para integrar os alunos no mercado de trabalho de forma rápida e eficiente.' : ''}</p>

                            <li>Microcredenciação</li>
                            <button onClick={toggleMessageSeis}>Saber mais...</button>
                            <p id="saberMaisSeis">{clickCountSeis % 2 === 1 ? 'Refere-se à obtenção de credenciais ou certificados em áreas específicas de conhecimento ou habilidades, muitas vezes por meio de cursos ou treinamentos curtos e especializados.' : ''}</p>

                            <li>Curso Breve</li>
                            <button onClick={toggleMessageSete}>Saber mais...</button>
                            <p id="saberMaisSete">{clickCountSete % 2 === 1 ? 'Geralmente são cursos de curta duração que visam fornecer conhecimento específico em uma área determinada, sem aprofundamento acadêmico.' : ''}</p>

                            <li>Especialização</li>
                            <button onClick={toggleMessageOito}>Saber mais...</button>
                            <p id="saberMaisOito">{clickCountOito % 2 === 1 ? 'ão cursos de pós-graduação lato sensu, que têm como objetivo aprofundar os conhecimentos em uma área específica de atuação profissional.' : ''}</p>

                            <li>Outra formação</li>
                            <button onClick={toggleMessageNove}>Saber mais...</button>
                            <p id="saberMaisNove">{clickCountNove % 2 === 1 ? 'Pode se referir a qualquer outro tipo de curso, treinamento ou formação acadêmica que não se encaixe nas categorias acima mencionadas.' : ''}</p>
                        </ul>
                    </div>
                </div>
                <br />
                <section>
                    <h1>Área de Estudo</h1>
                    <ul>
                        {/* Lista de tipos de cursos com botões "Saber mais..." e informações específicas */}
                        <li>
                            <p>Saúde</p>
                            <button onClick={toggleMessageDez}>Saber mais...</button>
                            <p id="saberMaisDez">{clickCountDez % 2 === 1 ? '<strong>AAA<strong/>Definição: A área da saúde envolve o estudo e a prática de cuidados com a saúde humana, prevenção de doenças, diagnóstico e tratamento de enfermidades. Objetivos: O objetivo principal é promover o bem-estar físico, mental e social dos indivíduos e das comunidades. Saídas no Mercado de Trabalho: Médico, enfermeiro, fisioterapeuta, psicólogo, nutricionista, farmacêutico, entre outros.' : ''}</p>

                            <p>Gestão</p>
                            <button onClick={toggleMessageOnze}>Saber mais...</button>
                            <p id="saberMaisOnze">{clickCountOnze % 2 === 1 ? 'Definição: Esta área envolve o estudo e a aplicação de princípios econômicos e de gestão em organizações e empresas. Objetivos: Compreender e otimizar o uso de recursos em organizações, analisar mercados, gerenciar projetos e equipes, entre outros. Saídas no Mercado de Trabalho: Gestor, analista financeiro, consultor empresarial, auditor, economista, entre outros.' : ''}</p>

                            <p>Economia</p>
                            <button onClick={toggleMessageDoze}>Saber mais...</button>
                            <p id="saberMaisDoze">{clickCountDoze % 2 === 1 ? 'Definição: Esta área envolve o estudo e a aplicação de princípios econômicos e de gestão em organizações e empresas. Objetivos: Compreender e otimizar o uso de recursos em organizações, analisar mercados, gerenciar projetos e equipes, entre outros. Saídas no Mercado de Trabalho: Gestor, analista financeiro, consultor empresarial, auditor, economista, entre outros.' : ''}</p>

                            <p>Contabilidade</p>
                            <button onClick={toggleMessageTreze}>Saber mais...</button>
                            <p id="saberMaisTreze">{clickCountTreze % 2 === 1 ? 'Definição: Envolve o registro, análise e interpretação de transações financeiras de uma empresa ou organização. Objetivos: Fornecer informações financeiras precisas e relevantes para tomadas de decisão internas e externas. Saídas no Mercado de Trabalho: Contador, auditor, analista contábil, controller, perito contábil, entre outros.' : ''}</p>

                            <p>Ciências Empresariais</p>
                            <button onClick={toggleMessageCatorze}>Saber mais...</button>
                            <p id="saberMaisCatorze">{clickCountCatorze % 2 === 1 ? 'Definição: Estuda os princípios e práticas relacionados à administração e ao funcionamento das organizações. Objetivos: Desenvolver habilidades de gestão, liderança, empreendedorismo e análise estratégica. Saídas no Mercado de Trabalho: Gerente de negócios, analista de mercado, empreendedor, consultor empresarial, entre outros.' : ''}</p>
                        </li>
                        <li>
                            <p>Conservação e Restauro</p>
                            <button onClick={toggleMessageQuinze}>Saber mais...</button>
                            <p id="saberMaisQuinze">{clickCountQuinze % 2 === 1 ? 'Definição: Envolve a preservação e recuperação de obras de arte, edifícios históricos e patrimônio cultural. Objetivos: Conservar e restaurar objetos culturais e históricos para garantir sua integridade e valor cultural. Saídas no Mercado de Trabalho: Restaurador de obras de arte, conservador de patrimônio, técnico em museologia, entre outros.' : ''}</p>

                            <p>Humanidades</p>
                            <button onClick={toggleMessageDezesseis}>Saber mais...</button>
                            <p id="saberMaisDezesseis">{clickCountDezesseis % 2 === 1 ? 'Definição: Área que estuda o comportamento humano, cultura, sociedade e história por meio de disciplinas como filosofia, história, linguística, literatura, entre outras. Objetivos: Compreender a condição humana, sua cultura, valores e expressões artísticas ao longo do tempo. Saídas no Mercado de Trabalho: Professor, historiador, editor, pesquisador, escritor, entre outros.' : ''}</p>

                            <p>Património</p>
                            <button onClick={toggleMessageDezessete}>Saber mais...</button>
                            <p id="saberMaisDezessete">{clickCountDezessete % 2 === 1 ? 'Definição: Envolvida na preservação, proteção e valorização de bens culturais e naturais considerados patrimônio. Objetivos: Conservar e promover o patrimônio cultural e natural para as gerações presentes e futuras. Saídas no Mercado de Trabalho: Gestor de patrimônio, conservador, museólogo, arqueólogo, entre outros.' : ''}</p>

                            <p>Arte e Comunicação</p>
                            <button onClick={toggleMessageDezoito}>Saber mais...</button>
                            <p id="saberMaisDezoito">{clickCountDezoito % 2 === 1 ? 'Definição: Engloba várias formas de expressão artística e as técnicas de comunicação visual, verbal e digital. Objetivos: Criar, transmitir e interpretar mensagens por meio de diferentes formas de arte e mídia. Saídas no Mercado de Trabalho: Artista visual, designer gráfico, comunicador social, ilustrador, cineasta, entre outros.' : ''}</p>

                            <p>Arqueologia</p>
                            <button onClick={toggleMessageDezanove}>Saber mais...</button>
                            <p id="saberMaisDezanove">{clickCountDezanove % 2 === 1 ? 'Definição: Estuda os vestígios materiais deixados por sociedades antigas e pré-históricas para reconstruir o passado humano. Objetivos: Pesquisar, escavar, analisar e interpretar artefatos e sítios arqueológicos para entender a história humana. Saídas no Mercado de Trabalho: Arqueólogo, pesquisador, professor, consultor em patrimônio cultural, entre outros.' : ''}</p>

                            <p>Artes Plásticas</p>
                            <button onClick={toggleMessageVinte}>Saber mais...</button>
                            <p id="saberMaisVinte">{clickCountVinte % 2 === 1 ? 'Definição: Envolvem a criação de obras de arte visual, como pintura, escultura, desenho, gravura e outras formas de expressão artística. Objetivos: Explorar a criatividade, expressão pessoal e técnica para criar obras de arte. Saídas no Mercado de Trabalho: Artista plástico, professor de artes, curador de galeria, ilustrador, designer, entre outros.' : ''}</p>

                        </li>
                        <li>
                            <p>Engenharias</p>
                            <button onClick={toggleMessageVinteum}>Saber mais...</button>
                            <p id="saberMaisVinteum">{clickCountVinteum % 2 === 1 ? 'Definição: Área que envolve a aplicação de princípios científicos e matemáticos para resolver problemas e desenvolver tecnologias em diversos campos. Objetivos: Projetar, construir, manter e melhorar sistemas, infraestruturas e produtos para atender às necessidades da sociedade. Saídas no Mercado de Trabalho: Engenheiro civil, engenheiro mecânico, engenheiro elétrico, engenheiro de software, entre outros.' : ''}</p>

                            <p>Matemática</p>
                            <button onClick={toggleMessageVintedois}>Saber mais...</button>
                            <p id="saberMaisVintedois">{clickCountVintedois % 2 === 1 ? 'Definição: Estudo dos números, quantidades, formas, estruturas e padrões, bem como suas relações e propriedades. Objetivos: Desenvolver habilidades analíticas, lógicas e de resolução de problemas, aplicáveis em diversas áreas da ciência e da tecnologia. Saídas no Mercado de Trabalho: Professor de matemática, analista financeiro, cientista de dados, pesquisador, atuário, entre outros.' : ''}</p>

                            <p>Tecnologias</p>
                            <button onClick={toggleMessageVintetres}>Saber mais...</button>
                            <p id="saberMaisVintetres">{clickCountVintetres % 2 === 1 ? 'Definição: Área que engloba o estudo e a aplicação de tecnologias em diferentes campos, como informática, biotecnologia, nanotecnologia, entre outros. Objetivos: Desenvolver e aplicar tecnologias para resolver problemas e melhorar processos em várias áreas. Saídas no Mercado de Trabalho: Desenvolvedor de software, especialista em redes, analista de sistemas, técnico em automação, entre outros.' : ''}</p>

                            <p>Física</p>
                            <button onClick={toggleMessageVintequatro}>Saber mais...</button>
                            <p id="saberMaisVintequatro">{clickCountVintequatro % 2 === 1 ? 'Definição: Ciência que estuda as propriedades da matéria, energia e as interações fundamentais que regem o universo. Objetivos: Compreender as leis e os fenômenos físicos que governam o mundo natural. Saídas no Mercado de Trabalho: Pesquisador em física, professor, engenheiro, consultor em energia, cientista de dados, entre outros.' : ''}</p>

                            <p>Tecnologias de Informação e Comunicação</p>
                            <button onClick={toggleMessageVintecinco}>Saber mais...</button>
                            <p id="saberMaisVintecinco">{clickCountVintecinco % 2 === 1 ? 'Definição: Área que envolve o estudo e o desenvolvimento de tecnologias para processamento, armazenamento e transmissão de informações. Objetivos: Criar e gerenciar sistemas de informação e comunicação para facilitar a troca de dados e o acesso à informação. Saídas no Mercado de Trabalho: Desenvolvedor web, administrador de banco de dados, analista de segurança da informação, especialista em redes, entre outros.' : ''}</p>
                        </li>
                        <li>
                            <p>Ciências Sociais</p>
                            <button onClick={toggleMessageVinteseis}>Saber mais...</button>
                            <p id="saberMaisVinteseis">{clickCountVinteseis % 2 === 1 ? 'Definição: Engloba diversas disciplinas que estudam o comportamento humano, a sociedade, as relações sociais, culturais e políticas. Objetivos: Compreender as estruturas sociais, culturais e políticas e seus efeitos na vida das pessoas e das comunidades. Saídas no Mercado de Trabalho: Sociólogo, antropólogo, assistente social, cientista político, gestor de políticas públicas, entre outros.' : ''}</p>

                            <p>Turismo</p>
                            <button onClick={toggleMessageVintesete}>Saber mais...</button>
                            <p id="saberMaisVintesete">{clickCountVintesete % 2 === 1 ? 'Definição: Estudo e prática relacionados à organização, promoção e gestão de viagens, lazer e hospedagem. Objetivos: Desenvolver e promover destinos turísticos, proporcionar experiências positivas aos turistas e gerar benefícios econômicos para as comunidades. Saídas no Mercado de Trabalho: Gestor de turismo, agente de viagens, guia turístico, consultor de destinos, analista de marketing turístico, entre outros.' : ''}</p>

                            <p>Direito</p>
                            <button onClick={toggleMessageVinteoito}>Saber mais...</button>
                            <p id="saberMaisVinteoito">{clickCountVinteoito % 2 === 1 ? 'Definição: Conjunto de normas e princípios que regem as relações sociais e asseguram direitos e deveres dos cidadãos. Objetivos: Garantir a justiça, a ordem e a proteção dos direitos individuais e coletivos. Saídas no Mercado de Trabalho: Advogado, juiz, promotor, defensor público, consultor jurídico, entre outros.' : ''}</p>

                            <p>Serviços</p>
                            <button onClick={toggleMessageVintenove}>Saber mais...</button>
                            <p id="saberMaisVintenove">{clickCountVintenove % 2 === 1 ? 'Definição: Engloba uma variedade de atividades que visam atender às necessidades e demandas da sociedade. Objetivos: Fornecer serviços de qualidade e valor aos clientes, gerando satisfação e fidelização. Saídas no Mercado de Trabalho: Gerente de serviços, atendente, gestor de qualidade, consultor de serviços, entre outros.' : ''}</p>

                            <p>Recursos Humanos</p>
                            <button onClick={toggleMessageTrinta}>Saber mais...</button>
                            <p id="saberMaisTrinta">{clickCountTrinta % 2 === 1 ? 'Definição: Área que lida com a gestão e desenvolvimento de pessoas dentro das organizações. Objetivos: Recrutar, selecionar, treinar e desenvolver funcionários para maximizar seu desempenho e contribuição para a organização. aídas no Mercado de Trabalho: Gestor de recursos humanos, analista de recrutamento, especialista em desenvolvimento organizacional, consultor de RH, entre outros.' : ''}</p>
                        </li>
                    </ul>
                </section>
                <div>
                    {/* Informações de contato */}
                    <strong>Entre em contacto:</strong>
                    <Link to="/contacto"> Clique aqui</Link>
                </div>
                <section>
                    <div>
                        {/* Seção de localização atual */}
                        <p>Localização Atual:</p>
                        {userLocation ? (
                            // Se a localização do usuário estiver disponível, exibe as coordenadas
                            <p>Latitude: {userLocation.latitude} <br /> Longitude: {userLocation.longitude}</p>
                        ) : (
                            // Se a localização do usuário não estiver disponível, exibe uma mensagem correspondente
                            <p>Localização não disponível</p>
                        )}
                    </div>
                </section>
            </div>

            {/* Botão de voltar */}
            <div className="back-button">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>VOLTAR</Link>
            </div>
        </div>
    );
}

export default Cursos; // Exporta o componente "Cursos" para uso em outros lugares