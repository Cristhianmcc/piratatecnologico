import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import Layout from './components/layout/Layout';

// Contexts
import { ProgramsProvider } from './contexts/ProgramsContext/ProgramsContext';

// Pages
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import PopularPage from './pages/PopularPage';
import NewPage from './pages/NewPage';
import AboutPage from './pages/AboutPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ProgramsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="categorias" element={<CategoriesPage />} />
        <Route path="categoria/:categoryId" element={<CategoryPage />} />
        <Route path="populares" element={<PopularPage />} />
        <Route path="nuevo" element={<NewPage />} />
        <Route path="acerca" element={<AboutPage />} />
        <Route path="programa/:programId" element={<ProgramDetailPage />} />
        <Route path="busqueda" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />      </Route>
    </Routes>
    </ProgramsProvider>
  );
}

export default App;
