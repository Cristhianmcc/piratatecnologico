import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories, getProgramsByCategory } from '../data/programsData';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const categories = getAllCategories();
  
  return (
    <div className="categories-page">
      <div className="container">
        <div className="page-header">
          <h1>Todas las Categorías</h1>
          <p>Explora nuestra colección de software organizada por categorías</p>
        </div>
        
        <div className="categories-grid">
          {categories.map(category => {
            const programCount = getProgramsByCategory(category.id).length;
            
            return (
              <Link to={`/categoria/${category.id}`} className="category-card" key={category.id}>
                <div className="category-icon"><i className={category.icon}></i></div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="program-count">{programCount} programas</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
