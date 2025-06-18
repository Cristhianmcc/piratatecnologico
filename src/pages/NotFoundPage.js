import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Página no encontrada</h1>
          <p>La página que estás buscando no existe o ha sido movida.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            <Link to="/categorias" className="btn btn-secondary">Explorar categorías</Link>
          </div>
          <div className="pirate-icon">
            <i className="fas fa-skull-crossbones"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
