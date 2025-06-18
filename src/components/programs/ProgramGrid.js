import React from 'react';
import ProgramCard from './ProgramCard';
import './ProgramGrid.css';

const ProgramGrid = ({ programs, title, viewAllLink }) => {
  return (
    <div className="programs-section">
      {title && (
        <div className="section-header fade-in">
          <h2>{title}</h2>
          {viewAllLink && (
            <a href={viewAllLink} className="view-all">
              Ver Todos <i className="fas fa-arrow-right"></i>
            </a>
          )}
        </div>
      )}
      
      <div className="program-grid fade-in">
        {programs && programs.length > 0 ? (
          programs.map(program => (
            <ProgramCard key={program._id || program.id} program={program} />
          ))
        ) : (
          <div className="no-programs">
            <i className="fas fa-search"></i>
            <p>No se encontraron programas</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramGrid;
