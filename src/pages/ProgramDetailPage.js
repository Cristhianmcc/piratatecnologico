import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { usePrograms } from '../contexts/ProgramsContext/ProgramsContext';
import { getCategoryById } from '../data/programsData'; // Mantenemos temporalmente
import ProgramGrid from '../components/programs/ProgramGrid';
import Loading from '../components/ui/Loading';
import './ProgramDetailPage.css';

const ProgramDetailPage = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const { getProgramById } = usePrograms();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPrograms, setRelatedPrograms] = useState([]);
  const [activeTab, setActiveTab] = useState('descripcion');
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  
  useEffect(() => {
    // Cargar detalles del programa
    const loadProgramDetails = async () => {
      // Verificar si el programId es válido
      if (!programId || programId === 'undefined') {
        console.error('ID de programa inválido:', programId);
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        console.log('Solicitando programa con ID:', programId);
        const programData = await getProgramById(programId);
        console.log('Datos del programa recibidos:', programData);
        setProgram(programData);
          // Por ahora simulamos programas relacionados con los programas similares de la misma categoría
        // En una implementación completa, esto vendría de un endpoint específico de la API
        if (programData && programData.category) {
          try {
            // Obtener programas de la misma categoría
            const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8080/api'}/programs?category=${programData.category}&limit=3`);
            if (response.ok) {
              const data = await response.json();
              // Filtrar para no incluir el programa actual
              const related = data.programs.filter(prog => prog._id !== programData._id);
              setRelatedPrograms(related);
            }
          } catch (error) {
            console.error("Error cargando programas relacionados:", error);
            setRelatedPrograms([]);
          }
        }
      } catch (error) {
        console.error("Error cargando programa:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProgramDetails();
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [programId, getProgramById]);

  if (loading) {
    return <Loading message="Cargando detalles del programa..." />;
  }
  
  if (!program) {
    return (
      <div className="container error-container">
        <h2>Programa no encontrado</h2>
        <p>El programa que estás buscando no existe o ha sido eliminado.</p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    );
  }
  
  // Usamos la categoría directamente del programa
  const category = program.category ? { name: program.categoryName } : null;
    // Componente de debug solo visible en desarrollo
  /* 
  const DebugInfo = ({ programId, program }) => {
    if (process.env.NODE_ENV !== 'development') return null;
    
    return (
      <div style={{ 
        position: 'fixed', 
        bottom: '10px', 
        right: '10px',
        background: '#333',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        maxWidth: '400px',
        zIndex: 9999
      }}>
        <h4>Debug Info</h4>
        <p><strong>programId:</strong> {programId || 'no disponible'}</p>
        <p><strong>program:</strong> {program ? 'disponible' : 'no disponible'}</p>
        {program && (
          <>
            <p><strong>_id:</strong> {program._id}</p>
            <p><strong>name:</strong> {program.name}</p>
            <p><strong>category:</strong> {program.category}</p>
          </>
        )}
      </div>
    );
  };
  */
  
  // Función vacía para no romper las referencias al componente
  const DebugInfo = () => null;
    return (
    <div className="program-detail-page">
      {/* Componente de debug comentado */}
      {/* <DebugInfo programId={programId} program={program} /> */}
      <div className="container">
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to={`/categoria/${program.category}`}>{program.categoryName}</Link></li>
            <li>{program.name}</li>
          </ul>
        </div>
        
        <div className="program-header">
          <div className="program-info">
            <div className="program-thumbnail">
              <img src={program.thumbnail || '/img/default-thumbnail.jpg'} alt={program.name} />
            </div>
            
            <div className="program-basic-info">
              <h1>{program.name}</h1>
              <div className="program-meta">
                <span className="version">Versión {program.version}</span>
                <span className="developer">Por {program.developer}</span>
                <Link to={`/categoria/${program.category}`} className="category-badge">
                  <i className={category?.icon || 'fas fa-folder'}></i> {program.categoryName}
                </Link>
              </div>
              
              <div className="program-stats">
                <div className="rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < Math.floor(program.rating) ? 'filled' : 
                                               i < program.rating ? 'half' : ''}`}
                      ></i>
                    ))}
                  </div>
                  <span className="rating-value">{program.rating.toFixed(1)}</span>
                </div>
                
                <div className="downloads">
                  <i className="fas fa-download"></i>
                  <span>{program.downloads.toLocaleString()} descargas</span>
                </div>
              </div>
              
              <p className="program-description">{program.description}</p>
              
              <div className="program-os">
                <span>Disponible para:</span>
                <div className="os-icons">
                  {program.platform && program.platform.some(p => p.toLowerCase().includes('windows')) && <i className="fab fa-windows" title="Windows"></i>}
                  {program.platform && program.platform.some(p => p.toLowerCase().includes('mac')) && <i className="fab fa-apple" title="macOS"></i>}
                  {program.platform && program.platform.some(p => p.toLowerCase().includes('linux')) && <i className="fab fa-linux" title="Linux"></i>}
                  {program.platform && program.platform.some(p => p.toLowerCase().includes('android')) && <i className="fab fa-android" title="Android"></i>}
                  {program.platform && program.platform.some(p => p.toLowerCase().includes('ios')) && <i className="fab fa-app-store-ios" title="iOS"></i>}
                </div>
              </div>
              
              <div className="program-actions">
                <a href={program.downloadLink || '#'} className="btn btn-primary btn-download">
                  <i className="fas fa-download"></i> Descargar
                </a>
                {program.website && (
                  <a href={program.website} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Sitio Oficial
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="program-content">
          <div className="program-tabs">
            <button 
              className={`tab-btn ${activeTab === 'descripcion' ? 'active' : ''}`}
              onClick={() => setActiveTab('descripcion')}
            >
              <i className="fas fa-info-circle"></i> Descripción
            </button>
            <button 
              className={`tab-btn ${activeTab === 'capturas' ? 'active' : ''}`}
              onClick={() => setActiveTab('capturas')}
            >
              <i className="fas fa-images"></i> Capturas de pantalla
            </button>
            <button 
              className={`tab-btn ${activeTab === 'requisitos' ? 'active' : ''}`}
              onClick={() => setActiveTab('requisitos')}
            >
              <i className="fas fa-laptop"></i> Requisitos
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'descripcion' && (
              <div className="description-tab">
                {program.fullDescription ? (
                  <div dangerouslySetInnerHTML={{ __html: program.fullDescription }}></div>
                ) : (
                  <p>{program.description}</p>
                )}
                
                {program.features && program.features.length > 0 && (
                  <div className="features-list">
                    <h3>Características principales</h3>
                    <div className="features-grid">
                      {program.features.map((feature, index) => (
                        <div className="feature-item" key={index}>
                          <i className="fas fa-check-circle"></i>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'capturas' && (
              <div className="screenshots-tab">
                {program.screenshots && program.screenshots.length > 0 ? (
                  <div className="screenshot-gallery">
                    <div className="main-screenshot">
                      <img 
                        src={program.screenshots[activeScreenshot]} 
                        alt={`${program.name} captura ${activeScreenshot + 1}`} 
                      />
                    </div>
                    
                    <div className="thumbnail-list">
                      {program.screenshots.map((screenshot, index) => (
                        <div 
                          key={index}
                          className={`thumbnail ${index === activeScreenshot ? 'active' : ''}`}
                          onClick={() => setActiveScreenshot(index)}
                        >
                          <img src={screenshot} alt={`Miniatura ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="no-screenshots">
                    <i className="fas fa-images"></i>
                    <p>No hay capturas de pantalla disponibles para este programa</p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'requisitos' && (
              <div className="requirements-tab">
                {program.requirements ? (
                  <div className="requirements-container">
                    {program.requirements.minimum && (
                      <div className="requirements-col">
                        <h3>Requisitos mínimos</h3>
                        {Array.isArray(program.requirements.minimum) ? (
                          <ul className="requirements-list">
                            {program.requirements.minimum.map((req, index) => (
                              <li key={index}>
                                <i className="fas fa-check"></i>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{program.requirements.minimum}</p>
                        )}
                      </div>
                    )}
                    
                    {program.requirements.recommended && (
                      <div className="requirements-col">
                        <h3>Requisitos recomendados</h3>
                        {Array.isArray(program.requirements.recommended) ? (
                          <ul className="requirements-list">
                            {program.requirements.recommended.map((req, index) => (
                              <li key={index}>
                                <i className="fas fa-check"></i>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{program.requirements.recommended}</p>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <p>No hay información disponible sobre los requisitos del sistema.</p>
                )}
                
                <div className="additional-info">
                  {program.size && (
                    <div className="info-item">
                      <span className="info-label">Tamaño del archivo:</span>
                      <span className="info-value">{program.size}</span>
                    </div>
                  )}
                  {program.releaseDate && (
                    <div className="info-item">
                      <span className="info-label">Fecha de lanzamiento:</span>
                      <span className="info-value">
                        {new Date(program.releaseDate).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  {program.license && (
                    <div className="info-item">
                      <span className="info-label">Tipo de licencia:</span>
                      <span className="info-value">{program.license}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {relatedPrograms.length > 0 && (
          <div className="related-programs">
            <div className="section-header">
              <h2>Programas Relacionados</h2>
            </div>
            <ProgramGrid programs={relatedPrograms} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramDetailPage;
