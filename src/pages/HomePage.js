import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgramGrid from '../components/programs/ProgramGrid';
import Loading from '../components/ui/Loading';
import { usePrograms } from '../contexts/ProgramsContext/ProgramsContext';
import { getAllCategories } from '../data/programsData'; // Mantenemos por ahora para las categorías
import './HomePage.css';

const HomePage = () => {
  const { loading, featuredPrograms, newPrograms } = usePrograms();
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // Por ahora, seguimos usando la función local para categorías
    // En una implementación completa, esto vendría también de la API
    setCategories(getAllCategories().slice(0, 4));
  }, []);
  
  useEffect(() => {
    // Add fade-in animation for elements as they scroll into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Renderizado condicional basado en el estado de carga
  if (loading) {
    return <Loading message="Cargando programas destacados..." />;
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenido a Pirata Tecnológico</h1>
            <p>Tu destino para encontrar los mejores programas y software para todas tus necesidades tecnológicas.</p>
            <div className="hero-buttons">
              <a href="#programas" className="btn btn-primary">Ver Programas</a>
              <Link to="/categorias" className="btn btn-secondary">Explorar Categorías</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-banner">
        <div className="container">
          <div className="category-list">
            {getAllCategories().map(category => (
              <Link to={`/categoria/${category.id}`} className="category-item" key={category.id}>
                <i className={category.icon}></i>
                <span>{category.name}</span>
              </Link>
            ))}
            <Link to="/categorias" className="category-item">
              <i className="fas fa-ellipsis-h"></i>
              <span>Más</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="programas" className="programs">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Programas Destacados</h2>
            <Link to="/populares" className="view-all">Ver Todos <i className="fas fa-arrow-right"></i></Link>
          </div>
          <ProgramGrid programs={featuredPrograms} className="fade-in" />
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Recién Agregados</h2>
            <Link to="/nuevo" className="view-all">Ver Todos <i className="fas fa-arrow-right"></i></Link>
          </div>
          <ProgramGrid programs={newPrograms} className="fade-in" />
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Categorías Populares</h2>
          </div>
          <div className="categories-grid fade-in">
            {categories.map(category => (
              <Link to={`/categoria/${category.id}`} className="category-card" key={category.id}>
                <div className="category-icon"><i className={category.icon}></i></div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
