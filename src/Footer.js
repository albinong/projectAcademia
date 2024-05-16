// Footer.js

import './App.css'; //Importa o App.css
import React, { useState, useEffect } from 'react'; //mporta o módulo React do pacote 'react' e também os Hooks useState e useEffect, que são recursos fundamentais do React para o gerenciamento de estado e efeitos colaterais em componentes funcionais.

function Footer() {

  // Função para redirecionar para as páginas das redes sociais
  const redirectToSocialMedia = (socialMedia) => {
    // Mapeia a rede social para sua respectiva URL
    const socialMediaUrls = {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/feed/',
    };

    // Verifica se a rede social está presente no objeto de URLs
    if (socialMediaUrls[socialMedia]) {
      // Abre a URL da rede social em uma nova aba
      window.open(socialMediaUrls[socialMedia], '_blank');
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
    <div className="footer">
      <footer style={{ display: 'flex' }}>
        <h2 style={{ color: 'orange', marginRight: '60px' }}>GONÇALVES</h2>
        <div className='redes' style={{ marginRight: '150px' }}>
          <p style={{ color: 'IndianRed' }}>&copy; 2024 Academia de Estudos</p>
          {/* Ícones das redes sociais */}
          <div className="social-icons">
            {/* Facebook */}
            <span className="social-icon" onClick={() => redirectToSocialMedia('facebook')} style={{ cursor: 'pointer', color: 'blue' }}>
              <i className="fab fa-facebook-f"></i>
            </span>
            {/* Twitter */}
            <span className="social-icon" onClick={() => redirectToSocialMedia('twitter')} style={{ cursor: 'pointer', color: 'SkyBlue' }}>
              <i className="fab fa-twitter"></i>
            </span>
            {/* Instagram */}
            <span className="social-icon" onClick={() => redirectToSocialMedia('instagram')} style={{ cursor: 'pointer', color: 'orange' }}>
              <i className="fab fa-instagram"></i>
            </span>
            {/* LinkedIn */}
            <span className="social-icon" onClick={() => redirectToSocialMedia('linkedin')} style={{ cursor: 'pointer', color: 'SteelBlue' }}>
              <i className="fab fa-linkedin"></i>
            </span>
            <div>
              <p style={{ color: 'IndianRed' }}>Sobre nós</p>
              <p style={{ color: 'IndianRed' }}>o foco principal é proporcionar um ambiente propício para a aprendizagem e o desenvolvimento acadêmico, visando o sucesso educacional e pessoal dos estudantes</p>
            </div>
          </div>
        </div>
        <div className="contacto" style={{ marginRight: '180px', color: 'IndianRed' }}>
          <p style={{ color: 'IndianRed' }}>CONTACTO:</p>
          <p style={{ color: 'IndianRed' }}>Quinta do Contador, Estrada da Serra<br />2300-315 Tomar - Portugal</p>
          <ul>
            <li>Terminal: +351 926 183 830</li>
            <li>Email: albergoncalves97@gmail.com</li>
            <li>ACADEMIA DE ESTUDOS</li>
          </ul>
        </div>
        <div className="localização" style={{ marginLeft: '10px' }}>
          <p style={{ color: 'IndianRed' }}>Localização Atual:</p>
          {userLocation ? (
            <p style={{ color: 'IndianRed' }}>Latitude: {userLocation.latitude} <br /> Longitude: {userLocation.longitude}</p>
          ) : (
            <p>Localização não disponível</p>
          )}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
