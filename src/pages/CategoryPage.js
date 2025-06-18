import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProgramGrid from '../components/programs/ProgramGrid';
import { getProgramsByCategory, getCategoryById } from '../data/programsData';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const programs = getProgramsByCategory(categoryId);
  
  if (!category) {
    return (
      <div className="container error-container">
        <h2>Categoría no encontrada</h2>
        <p>La categoría que estás buscando no existe.</p>
        <Link to="/categorias" className="btn btn-primary">Ver todas las categorías</Link>
      </div>
    );
  }
  
  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundImage: `url(${category.featuredImage || ''})` }}>
        <div className="category-overlay"></div>
        <div className="container">
          <div className="category-hero-content">
            <div className="category-icon-large">
              <i className={category.icon}></i>
            </div>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            <div className="breadcrumb">
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categorias">Categorías</Link></li>
                <li>{category.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="category-programs">
          <div className="section-header">
            <h2>Software de {category.name}</h2>
            <span className="program-count">{programs.length} programas</span>
          </div>
          
          {programs.length > 0 ? (
            <ProgramGrid programs={programs} />
          ) : (
            <div className="no-programs">
              <i className="fas fa-box-open"></i>
              <h3>No hay programas en esta categoría</h3>
              <p>Actualmente no tenemos programas en esta categoría. Vuelve pronto para ver nuevas incorporaciones.</p>
              <Link to="/categorias" className="btn btn-primary">Explorar otras categorías</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
