import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/busqueda?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <i className="fas fa-skull-crossbones"></i>
            <span>Pirata Tecnológico</span>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Inicio</Link></li>
            <li><Link to="/categorias" className={isActive('/categorias') ? 'active' : ''}>Categorías</Link></li>
            <li><Link to="/populares" className={isActive('/populares') ? 'active' : ''}>Populares</Link></li>
            <li><Link to="/nuevo" className={isActive('/nuevo') ? 'active' : ''}>Recién Agregados</Link></li>
            <li><Link to="/acerca" className={isActive('/acerca') ? 'active' : ''}>Acerca de</Link></li>
          </ul>
        </nav>
        
        <div 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
        >
          <i className="fas fa-sun sun"></i>
          <i className="fas fa-moon moon"></i>
        </div>
        
        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Buscar programas..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
