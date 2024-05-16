import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Importa os estilos do slideshow
import slide1 from './slide1.jpg'; // Importa a imagem do slide 1
import slide2 from './slide2.jpg'; // Importa a imagem do slide 2
import slide3 from './slide3.jpg'; // Importa a imagem do slide 3
import slide4 from './slide4.jpg'; // Importa a imagem do slide 4
import slide5 from './slide5.jpg'; // Importa a imagem do slide 5
import slide6 from './slide6.jpg'; // Importa a imagem do slide 6
import slide7 from './slide7.jpg'; // Importa a imagem do slide 7
import slide8 from './slide8.jpg'; // Importa a imagem do slide 8
import slide9 from './slide9.jpg'; // Importa a imagem do slide 9
import slide10 from './slide10.jpg'; // Importa a imagem do slide 10
import slide11 from './slide11.jpg'; // Importa a imagem do slide 11
import slide12 from './slide12.jpg'; // Importa a imagem do slide 12
import slide13 from './slide13.jpg'; // Importa a imagem do slide 13
import slide14 from './slide14.jpg'; // Importa a imagem do slide 14
import slide15 from './slide15.jpg'; // Importa a imagem do slide 15
import slide16 from './slide16.jpg'; // Importa a imagem do slide 16
import slide17 from './slide17.jpg'; // Importa a imagem do slide 17
import slide18 from './slide18.jpg'; // Importa a imagem do slide 18
import slide19 from './slide19.jpg'; // Importa a imagem do slide 19
import slide20 from './slide20.jpg'; // Importa a imagem do slide 20



const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1); // Inicializa o estado do índice do slide como 1

  useEffect(() => {
    const showSlides = (n) => {
      const slides = document.getElementsByClassName("mySlides"); // Obtém os elementos com a classe "mySlides"
      const dots = document.getElementsByClassName("dot"); // Obtém os elementos com a classe "dot"


      const slidesArray = [...slides]; // Converte a coleção de slides em um array
      const dotsArray = [...dots]; // Converte a coleção de indicadores em um array

      if (slidesArray.length === 0 || dotsArray.length === 0) {
        return; // Verifica se os elementos estão presentes
      }

      if (n > slidesArray.length) {
        setSlideIndex(1); // Define o índice do slide como 1 se for maior que o número total de slides
      }

      if (n < 1) {
        setSlideIndex(slidesArray.length); // Define o índice do slide como o número total de slides se for menor que 1
      }

      for (let i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = "none"; // Esconde todos os slides
      }

      for (let i = 0; i < dotsArray.length; i++) {
        dotsArray[i].className = dotsArray[i].className.replace(" active", ""); // Remove a classe "active" de todos os indicadores
      }

      // Usando setTimeout para garantir que os elementos estejam disponíveis
      setTimeout(() => {
        slidesArray[slideIndex - 1].style.display = "block"; // Exibe o slide atual
        dotsArray[slideIndex - 1].className += " active"; // Adiciona a classe "active" ao indicador do slide atual
      }, 0);
    };

    showSlides(slideIndex); // Chama a função showSlides com o índice do slide atual
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n); // Atualiza o índice do slide ao avançar ou retroceder
  };

  const currentSlide = (n) => { // Define o índice do slide ao clicar em um indicador
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      {/* Slides */}
      {/* Cada slide é representado por uma div com a classe "mySlides" contendo uma imagem */}
      <div className="mySlides fade">
        <img src={slide1} style={{ width: '100%' }} alt="Slide 1" />
      </div>
      <div className="mySlides fade">
        <img src={slide2} style={{ width: '100%' }} alt="Slide 2" />
      </div>
      <div className="mySlides fade">
        <img src={slide3} style={{ width: '100%' }} alt="Slide 3" />
      </div>
      <div className="mySlides fade">
        <img src={slide4} style={{ width: '100%' }} alt="Slide 4" />
      </div>
      <div className="mySlides fade">
        <img src={slide5} style={{ width: '100%' }} alt="Slide 5" />
      </div>
      <div className="mySlides fade">
        <img src={slide6} style={{ width: '100%' }} alt="Slide 6" />
      </div>
      <div className="mySlides fade">
        <img src={slide7} style={{ width: '100%' }} alt="Slide 7" />
      </div>
      <div className="mySlides fade">
        <img src={slide8} style={{ width: '100%' }} alt="Slide 8" />
      </div>
      <div className="mySlides fade">
        <img src={slide9} style={{ width: '100%' }} alt="Slide 9" />
      </div>
      <div className="mySlides fade">
        <img src={slide10} style={{ width: '100%' }} alt="Slide 10" />
      </div>
      <div className="mySlides fade">
        <img src={slide11} style={{ width: '100%' }} alt="Slide 11" />
      </div>
      <div className="mySlides fade">
        <img src={slide12} style={{ width: '100%' }} alt="Slide 12" />
      </div>
      <div className="mySlides fade">
        <img src={slide13} style={{ width: '100%' }} alt="Slide 13" />
      </div>
      <div className="mySlides fade">
        <img src={slide14} style={{ width: '100%' }} alt="Slide 14" />
      </div>
      <div className="mySlides fade">
        <img src={slide15} style={{ width: '100%' }} alt="Slide 15" />
      </div>
      <div className="mySlides fade">
        <img src={slide16} style={{ width: '100%' }} alt="Slide 16" />
      </div>
      <div className="mySlides fade">
        <img src={slide17} style={{ width: '100%' }} alt="Slide 17" />
      </div>
      <div className="mySlides fade">
        <img src={slide18} style={{ width: '100%' }} alt="Slide 18" />
      </div>
      <div className="mySlides fade">
        <img src={slide19} style={{ width: '100%' }} alt="Slide 19" />
      </div>
      <div className="mySlides fade">
        <img src={slide20} style={{ width: '100%' }} alt="Slide 20" />
      </div>

      {/* Botões de navegação */}
      <button className="prev" onClick={() => plusSlides(-1)}>❮</button>  {/* Botão para retroceder um slide */}
      <button className="next" onClick={() => plusSlides(1)}>❯</button> {/* Botão para avançar um slide */}

      {/* Indicadores de slide */}
      <div style={{ textAlign: 'center' }}>
        {[...Array(20)].map((_, index) => ( // Gera 20 indicadores de slide
          <span key={index + 1} className="dot" onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow; // Exporta o componente Slideshow
