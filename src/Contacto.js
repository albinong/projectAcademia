// Contacto.js

import React, { useState, useEffect } from 'react'; // Importa os hooks necessários do React
import './App.css'; //Importa o App.css
import alunos6 from './assets/alunos6.jpg'; // Importa a imagem "alunos6.jpg" do diretório de assets
import { Link } from 'react-router-dom'; // Importa o componente Link para criar links entre páginas
import Select from 'react-select';//a biblioteca react-select para criar um seletor personalizado com os códigos de país



function Contacto() {
    // Define o estado inicial para os dados do formulário e erros do formulário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        areaOfInterest: '',
        contactMethod: '',
        phoneCode: '',
        phoneNumber: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        subject: '',
        areaOfInterest: '',
        contactMethod: '',
        message: ''
    });

    // Função para lidar com as mudanças nos campos de entrada do formulário
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para lidar com a mudança no seletor de código de telefone
    const handlePhoneCodeChange = (selectedOption) => {
        setFormData({ ...formData, phoneCode: selectedOption });
    };

    // Função para validar o formulário
    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!formData.name) {
            formIsValid = false;
            errors.name = 'Por favor, insira seu nome.';
        }

        if (!formData.email) {
            formIsValid = false;
            errors.email = 'Por favor, insira seu endereço de e-mail.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors.email = 'Endereço de e-mail inválido.';
        }

        if (!formData.subject) {
            formIsValid = false;
            errors.subject = 'Por favor, insira o assunto.';
        }

        if (!formData.areaOfInterest) {
            formIsValid = false;
            errors.areaOfInterest = 'Por favor, selecione uma área de interesse.';
        }

        if (!formData.contactMethod) {
            formIsValid = false;
            errors.contactMethod = 'Por favor, selecione um método de contato preferido.';
        }

        if (!formData.message) {
            formIsValid = false;
            errors.message = 'Por favor, insira sua mensagem.';
        }

        setFormErrors(errors);
        return formIsValid;
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();  // Previne o comportamento padrão de envio do formulário
        if (validateForm()) { // Verifica se o formulário é válido
            // Armazenar os dados no localStorage
            localStorage.setItem('formData', JSON.stringify(formData));
            // Exibir os alertas
            window.alert(`${formData.name} Brevemente entraremos em contacto contigo. ATÉ JÁ! 😊`);
            window.alert('Os seus dados estão armazenados em um armazenamento local.');
            // Limpar os campos após o envio bem-sucedido
            setFormData({
                name: '',
                email: '',
                subject: '',
                areaOfInterest: '',
                contactMethod: '',
                phoneCode: '',
                phoneNumber: '',
                message: ''
            });
        } else {
            console.log('Formulário inválido. Por favor, corrija os erros.');
            window.alert('Formulário inválido. Por favor, corrija os erros.');

        }
    };

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
            <img src={alunos6} alt="Alunos6" /> {/* Insere a imagem "alunos6" com a descrição "Alunos6" */}
            <header className="cont-header">Entre em contacto preenchendo os campos a baixo</header> {/* Cabeçalho do formulário */}
            <form className="formulario" action="#" method="post" onSubmit={handleSubmit}> {/* Formulário com a classe "formulario" e função de envio handleSubmit */}
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder='Digite o seu nome completo aqui' value={formData.name} onChange={handleInputChange} required />{/* Campo de entrada para o nome */}
                <div className="error-message">{formErrors.name}</div>{/* Exibe mensagens de erro para o campo de nome, se houver */}
                <Select
                    id="phoneCode"
                    placeholder='Selecione o indicativo o seu Pais'
                    value={formData.phoneCode}
                    onChange={handlePhoneCodeChange}
                    options={[
                        // Opções para o seletor de código de telefone
                        { value: 'us', label: '+1 - United States' },
                        { value: 'uk', label: '+44 - United Kingdom' },
                        { value: 'ao', label: '+244 - Angola' },
                        { value: 'br', label: '+55 - Brasil' },
                        { value: 'pt', label: '+351 - Portugal' },
                        { value: 'jp', label: '+81 - Japão' },
                        { value: 'cn', label: '+86 - China' },
                        { value: 'ru', label: '+7 - Rússia' },
                        { value: 'kp', label: '+850 - Coreia do Norte' },
                        { value: 'kr', label: '+82 - Coreia do Sul' },
                        { value: 'na', label: '+264 - Namíbia' },
                        { value: 'fr', label: '+33 - França' },
                        { value: 'dz', label: '+213 - Argélia' },
                        { value: 'ar', label: '+54 - Argentina' },
                        { value: 'gn', label: '+224 - Guiné' },
                        { value: 'mz', label: '+258 - Moçambique' },
                        { value: 'es', label: '+34 - Espanha' },
                        { value: 'bo', label: '+591 - Bolívia' },
                        { value: 'zw', label: '+263 - Zimbábue' },
                        { value: 'ng', label: '+234 - Nigéria' },
                        { value: 'au', label: '+61 - Austrália' },
                        { value: 'ca', label: '+1 - Canadá' },
                        { value: 'de', label: '+49 - Alemanha' },
                        { value: 'in', label: '+91 - Índia' },
                        { value: 'it', label: '+39 - Itália' },
                        { value: 'mx', label: '+52 - México' },
                        { value: 'nz', label: '+64 - Nova Zelândia' },
                        { value: 'sa', label: '+966 - Arábia Saudita' },
                        { value: 'za', label: '+27 - África do Sul' },
                        { value: 'ch', label: '+41 - Suíça' },
                        { value: 'tr', label: '+90 - Turquia' },
                        { value: 'ae', label: '+971 - Emirados Árabes Unidos' },
                        { value: 'se', label: '+46 - Suécia' },
                        { value: 'fi', label: '+358 - Finlândia' }
                    ]}
                />  {/* Seletor personalizado para o código de telefone com as opções de países */}
                <label htmlFor="phoneNumber"></label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='Depois de teres selecionado o indicativo, digite aqui o seu contacto'
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                /> {/* Campo de entrada para o número de telefone */}
                <div className="error-message">{formErrors.phoneNumber}</div>{/* Exibe mensagens de erro para o campo de número de telefone, se houver */}
                <label htmlFor="email"></label>
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder='Digite o seu email' value={formData.email} onChange={handleInputChange} required /> {/* Campo de entrada para o endereço de e-mail */}
                <div className="error-message">{formErrors.email}</div>{/* Exibe mensagens de erro para o campo de e-mail, se houver */}

                <label htmlFor="subject"></label>
                <input type="text" id="subject" name="subject" placeholder='Digite o assunto de forma resumida aqui' value={formData.subject} onChange={handleInputChange} required /> {/* Campo de entrada para o assunto */}
                <div className="error-message">{formErrors.subject}</div>  {/* Exibe mensagens de erro para o campo de assunto, se houver */}

                <label htmlFor="areaOfInterest"></label>
                <select id="areaOfInterest" name="areaOfInterest" value={formData.areaOfInterest} onChange={handleInputChange} required> {/* Seletor para a área de interesse */}
                    <option value="" disabled>Selecione a Área de Interesse</option>
                    <option value="math">Matemática</option>
                    <option value="science">Ciências</option>
                    <option value="language">Línguas</option>
                    <option value="gnr">GNR</option>
                    <option value="police">Polícia Nacional</option>
                    <option value="troop">Tropa</option>
                    <option value="marines">Fuzileiros</option>
                </select>
                <div className="error-message">{formErrors.areaOfInterest}</div> {/* Exibe mensagens de erro para a área de interesse, se houver */}

                <label htmlFor="contactMethod"></label>
                <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} required> {/* Seletor para o método de contato preferido */}
                    <option value="" disabled>Método de Contato Preferido</option>
                    <option value="email">E-mail</option>
                    <option value="phone">Telefone</option>
                </select>
                <div className="error-message">{formErrors.contactMethod}</div> {/* Exibe mensagens de erro para o método de contato preferido, se houver */}

                <label htmlFor="message"></label>
                <textarea id="message" name="message" placeholder='Digite a mensagem que deseja enviar-nos aqui' rows="4" value={formData.message} onChange={handleInputChange} required></textarea>{/* Campo de entrada para a mensagem */}
                <div className="error-message">{formErrors.message}</div> {/* Exibe mensagens de erro para o campo de mensagem, se houver */}

                <input type="submit" value="Enviar" /> {/* Botão de envio do formulário */}
            </form>
            <div>
                <p>Localização</p> {/* Paragrafo para a seção de localização */}
                {userLocation ? (
                    <p>Latitude: {userLocation.latitude} Longitude: {userLocation.longitude}</p> // Exibe a latitude e longitude se disponível
                ) : (
                    <p>Localização não disponível</p> // Exibe uma mensagem se a localização não estiver disponível
                )}
            </div>
            {/* Botão de voltar */}
            <div className="back-button">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>VOLTAR</Link>{/* Cria um link para voltar à página inicial */}
            </div>
        </div>
    );
}

export default Contacto;  // Exporta o componente "Contacto" para uso em outros lugares