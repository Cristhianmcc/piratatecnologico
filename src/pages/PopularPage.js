import React from 'react';
import { Link } from 'react-router-dom';
import ProgramGrid from '../components/programs/ProgramGrid';
import { getPopularPrograms } from '../data/programsData';
import './PopularPage.css';

const PopularPage = () => {
  const programs = getPopularPrograms();
  
  return (
    <div className="popular-page">
      <div className="container">
        <div className="page-header">
          <h1>Programas Populares</h1>
          <p>Los programas más descargados y mejor valorados de nuestra colección</p>
        </div>
        
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li>Programas Populares</li>
          </ul>
        </div>
        
        <div className="filter-options">
          <div className="filter-group">
            <span>Ordenar por:</span>
            <select defaultValue="downloads">
              <option value="downloads">Más Descargas</option>
              <option value="rating">Mejor Valorados</option>
              <option value="date">Más Recientes</option>
            </select>
          </div>
          
          <div className="filter-group">
            <span>Sistema Operativo:</span>
            <div className="os-filters">
              <button className="os-filter active">
                <i className="fab fa-windows"></i>
                <span>Windows</span>
              </button>
              <button className="os-filter">
                <i className="fab fa-apple"></i>
                <span>Mac</span>
              </button>
              <button className="os-filter">
                <i className="fab fa-linux"></i>
                <span>Linux</span>
              </button>
              <button className="os-filter">
                <i className="fab fa-android"></i>
                <span>Android</span>
              </button>
            </div>
          </div>
        </div>
        
        <ProgramGrid programs={programs} />
      </div>
    </div>
  );
};

export default PopularPage;
