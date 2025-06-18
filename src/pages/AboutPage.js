import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Acerca de Pirata Tecnológico</h1>
            <p>Conoce más sobre nuestra misión, nuestro equipo y por qué amamos el software</p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li>Acerca de</li>
          </ul>
        </div>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Nuestra Misión</h2>
            <p>En Pirata Tecnológico, nos dedicamos a proporcionar acceso a software y herramientas tecnológicas para todos. Creemos que la tecnología debería estar al alcance de cualquier persona, independientemente de su situación económica o ubicación geográfica.</p>
            <p>Nuestro objetivo es crear una plataforma completa donde puedas encontrar, aprender y descubrir soluciones de software para cualquier necesidad, desde aplicaciones básicas hasta herramientas profesionales especializadas.</p>
          </div>
          
          <div className="about-section">
            <h2>Cómo Funciona</h2>
            <p>Nuestra plataforma es un catálogo curado de software donde:</p>
            <ul>
              <li>Organizamos programas por categorías para facilitar la búsqueda</li>
              <li>Proporcionamos información detallada, capturas de pantalla y requisitos de cada software</li>
              <li>Valoramos y destacamos los programas mejor evaluados por la comunidad</li>
              <li>Actualizamos regularmente nuestra colección con los programas más recientes</li>
              <li>Ofrecemos guías de instalación y consejos de uso</li>
            </ul>
          </div>
          
          <div className="about-section">
            <div className="team-grid">
              <div className="team-card">
                <div className="team-avatar">
                  <img src="/img/avatars/alex.jpg" alt="Alex Martínez" />
                </div>
                <h3>Alex Martínez</h3>
                <p className="team-role">Fundador y Desarrollador</p>
                <p className="team-bio">Apasionado por la tecnología y el software libre. Más de 10 años de experiencia en desarrollo web.</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                </div>
              </div>
              
              <div className="team-card">
                <div className="team-avatar">
                  <img src="/img/avatars/sofia.jpg" alt="Sofía García" />
                </div>
                <h3>Sofía García</h3>
                <p className="team-role">Diseñadora UX/UI</p>
                <p className="team-bio">Especialista en crear experiencias de usuario intuitivas y atractivas. Amante de la usabilidad y el diseño limpio.</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-dribbble"></i></a>
                  <a href="#"><i className="fab fa-behance"></i></a>
                </div>
              </div>
              
              <div className="team-card">
                <div className="team-avatar">
                  <img src="/img/avatars/carlos.jpg" alt="Carlos Rodríguez" />
                </div>
                <h3>Carlos Rodríguez</h3>
                <p className="team-role">Gestor de Contenidos</p>
                <p className="team-bio">Especializado en investigación y catalogación de software. Siempre buscando las mejores herramientas digitales.</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-medium"></i></a>
                  <a href="#"><i className="fab fa-reddit"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta, sugerencia o quieres colaborar con nosotros, no dudes en ponerte en contacto:</p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@piratatecnologico.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Madrid, España</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-comment"></i>
                <span>Encuéntranos en <a href="#">Telegram</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
