import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="fas fa-skull-crossbones"></i>
            <span>Pirata Tecnológico</span>
            <p>Tu destino para encontrar los mejores programas y software.</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categorias">Categorías</Link></li>
                <li><Link to="/populares">Populares</Link></li>
                <li><Link to="/nuevo">Recién Agregados</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Categorías</h3>
              <ul>
                <li><Link to="/categoria/productividad">Productividad</Link></li>
                <li><Link to="/categoria/diseno">Diseño</Link></li>
                <li><Link to="/categoria/seguridad">Seguridad</Link></li>
                <li><Link to="/categoria/multimedia">Multimedia</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><Link to="/terminos">Términos de Uso</Link></li>
                <li><Link to="/privacidad">Política de Privacidad</Link></li>
                <li><Link to="/dmca">DMCA</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pirata Tecnológico. Todos los derechos reservados.</p>
          <div className="social-links">
            <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" className="telegram"><i className="fab fa-telegram-plane"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
