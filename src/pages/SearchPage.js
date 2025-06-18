import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProgramGrid from '../components/programs/ProgramGrid';
import Loading from '../components/ui/Loading';
import { usePrograms } from '../contexts/ProgramsContext/ProgramsContext';
import './SearchPage.css';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchPrograms } = usePrograms();
  
  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await searchPrograms(query);
        if (response.error) {
          throw new Error(response.message);
        }
        setResults(response.programs || []);
      } catch (err) {
        console.error('Error searching programs:', err);
        setError('Ocurrió un error al buscar programas. Por favor intenta nuevamente.');
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchResults();
  }, [query, searchPrograms]);
  return (
    <div className="search-page">
      <div className="container">
        {isLoading && <Loading message="Buscando programas..." />}
        <div className="search-header">
          <h1>Resultados de búsqueda</h1>
          
          {isLoading ? (
            <p>Buscando programas...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <p>
              {results.length 
                ? `Encontramos ${results.length} programa${results.length !== 1 ? 's' : ''} para "${query}"`
                : `No encontramos resultados para "${query}"`
              }
            </p>
          )}
          
          <div className="search-form">
            <input 
              type="text" 
              placeholder="Buscar programas..." 
              defaultValue={query}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.location.href = `/busqueda?q=${encodeURIComponent(e.target.value)}`;
                }
              }}
            />
            <button onClick={() => {
              const input = document.querySelector('.search-form input');
              window.location.href = `/busqueda?q=${encodeURIComponent(input.value)}`;
            }}>
              <i className="fas fa-search"></i>
            </button>
          </div>        </div>
        
        {isLoading ? (
          <div className="loading-container">
            <p>Cargando resultados...</p>
            {/* Aquí podrías añadir un spinner de carga */}
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
            <Link to="/" className="button primary">Volver al inicio</Link>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="filter-options">
              <div className="filter-group">
                <span>Ordenar por:</span>
                <select defaultValue="relevance">
                  <option value="relevance">Relevancia</option>
                  <option value="downloads">Más Descargas</option>
                  <option value="rating">Mejor Valorados</option>
                  <option value="date">Más Recientes</option>
                </select>
              </div>
            </div>
            
            <ProgramGrid programs={results} />
          </>
        ) : (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No hay resultados</h3>
            <p>No encontramos programas que coincidan con tu búsqueda. Intenta con otros términos o explora nuestras categorías.</p>
            <div className="suggestion-links">
              <Link to="/" className="btn btn-primary">Volver al inicio</Link>
              <Link to="/categorias" className="btn btn-secondary">Explorar categorías</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
