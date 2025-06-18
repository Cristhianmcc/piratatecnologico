import React from 'react';
import { Link } from 'react-router-dom';
import ProgramGrid from '../components/programs/ProgramGrid';
import { getNewPrograms } from '../data/programsData';
import './NewPage.css';

const NewPage = () => {
  const programs = getNewPrograms();
  
  return (
    <div className="new-page">
      <div className="container">
        <div className="page-header">
          <h1>Recién Agregados</h1>
          <p>Los programas más recientes que hemos añadido a nuestra colección</p>
        </div>
        
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li>Recién Agregados</li>
          </ul>
        </div>
        
        {programs.length > 0 ? (
          <>
            <div className="new-banner">
              <div className="new-banner-content">
                <div className="new-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="new-text">
                  <h3>Última actualización</h3>
                  <p>Nuestra colección se actualiza semanalmente con los mejores programas</p>
                </div>
              </div>
            </div>
            
            <ProgramGrid programs={programs} />
          </>
        ) : (
          <div className="no-programs">
            <i className="fas fa-box-open"></i>
            <h3>No hay programas nuevos</h3>
            <p>Actualmente no tenemos programas recién agregados. Vuelve pronto para ver nuevas incorporaciones.</p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPage;
