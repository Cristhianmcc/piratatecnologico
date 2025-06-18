import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ program }) => {
  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  // Format number of downloads
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads.toString();
  };  return (
    <div className="program-card">
      <div className="program-card-image">
        <img 
          src={program.thumbnail || '/img/default-thumbnail.jpg'} 
          alt={program.name} 
        />
      </div>
      
      <div className="program-card-content">
        <div className="program-card-top-bar">
          {program.category && (
            <span className="program-card-category">{program.categoryName}</span>
          )}
          {program.version && (
            <span className="program-card-version">{program.version}</span>
          )}
        </div>
          <div className="program-card-header">          <h3 className="program-card-title">
            <Link to={`/programa/${program._id || program.id || ''}`}>{program.name}</Link>
          </h3>
        </div>
        
        <p className="program-card-description">{program.description}</p>
        
        <div className="program-card-meta">
          <div className="program-card-rating">
            <div className="stars">
              {renderStars(program.rating || 0)}
            </div>
            <span>{program.rating?.toFixed(1) || "0.0"}</span>
          </div>
          
          <div className="program-card-downloads">
            <i className="fas fa-download"></i>
            <span>{formatDownloads(program.downloads || 0)}</span>
          </div>
        </div>
        
        <div className="program-card-footer">          <Link to={`/programa/${program._id || program.id || ''}`} className="download-btn">
            <i className="fas fa-download"></i> Descargar
          </Link>
          <Link to={`/programa/${program._id || program.id || ''}`} className="details-btn">
            <i className="fas fa-info-circle"></i> Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
