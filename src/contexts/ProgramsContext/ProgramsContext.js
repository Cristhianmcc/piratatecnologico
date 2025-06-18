import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  getProgramsAPI, 
  getFeaturedProgramsAPI, 
  getProgramByIdAPI, 
  searchProgramsAPI, 
  getProgramsByCategoryAPI 
} from '../../utils/api';

// Crear el contexto
const ProgramsContext = createContext();

// Hook personalizado para usar el contexto
export const usePrograms = () => useContext(ProgramsContext);

// Proveedor del contexto
export const ProgramsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allPrograms, setAllPrograms] = useState([]);
  const [featuredPrograms, setFeaturedPrograms] = useState([]);
  const [newPrograms, setNewPrograms] = useState([]);
  const [popularPrograms, setPopularPrograms] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalPrograms: 0
  });
  
  // Cargar todos los programas
  const loadAllPrograms = useCallback(async (page = 1, limit = 20) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProgramsAPI(page, limit);
      if (response.error) {
        throw new Error(response.message);
      }
      setAllPrograms(response.programs);
      setPagination({
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        totalPrograms: response.totalPrograms
      });
    } catch (err) {
      setError(err.message);
      console.error('Error cargando programas:', err);
    } finally {
      setLoading(false);
    }
  }, []);
  
  // Cargar programas destacados
  const loadFeaturedPrograms = useCallback(async (limit = 8) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getFeaturedProgramsAPI(limit);
      if (response.error) {
        throw new Error(response.message);
      }
      setFeaturedPrograms(response);
    } catch (err) {
      setError(err.message);
      console.error('Error cargando programas destacados:', err);
    } finally {
      setLoading(false);
    }
  }, []);
  
  // Cargar programas nuevos (usaremos getProgramsAPI con ordenación por fecha)
  const loadNewPrograms = useCallback(async (limit = 8) => {
    setLoading(true);
    setError(null);
    try {
      // Para los nuevos programas, podemos usar la API general y asumir que están ordenados por fecha
      const response = await getProgramsAPI(1, limit);
      if (response.error) {
        throw new Error(response.message);
      }
      setNewPrograms(response.programs);
    } catch (err) {
      setError(err.message);
      console.error('Error cargando programas nuevos:', err);
    } finally {
      setLoading(false);
    }  }, []);
  
  // Cargar programa por ID
  const getProgramById = useCallback(async (id) => {
    // Validar el ID antes de hacer la solicitud
    if (!id || id === 'undefined' || id === 'null') {
      console.error('Se intentó cargar un programa con un ID inválido:', id);
      setError('ID de programa inválido');
      setLoading(false);
      return null;
    }
    
    setLoading(true);
    setError(null);
    try {
      console.log(`Realizando petición a la API para el programa con ID: ${id}`);
      const program = await getProgramByIdAPI(id);
      
      // Verificar si la respuesta es un error
      if (program.error) {
        throw new Error(program.message);
      }
      
      // Verificar si el objeto está vacío o no tiene las propiedades esperadas
      if (!program || !program._id || !program.name) {
        console.error('Programa no encontrado o datos incompletos:', program);
        throw new Error('Programa no encontrado');
      }
      
      return program;
    } catch (err) {
      setError(err.message);
      console.error(`Error cargando programa con ID ${id}:`, err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);
  
  // Buscar programas
  const searchPrograms = useCallback(async (query, filters = {}, page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchProgramsAPI(query, filters, page);
      if (response.error) {
        throw new Error(response.message);
      }
      return response;
    } catch (err) {
      setError(err.message);
      console.error('Error en la búsqueda de programas:', err);
      return { programs: [], totalPages: 0, currentPage: 1, totalResults: 0 };
    } finally {
      setLoading(false);
    }
  }, []);
  
  // Cargar programas por categoría
  const getProgramsByCategory = useCallback(async (category, page = 1, limit = 20) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProgramsByCategoryAPI(category, page, limit);
      if (response.error) {
        throw new Error(response.message);
      }
      return response;
    } catch (err) {
      setError(err.message);
      console.error(`Error cargando programas de la categoría ${category}:`, err);
      return { programs: [], totalPages: 0, currentPage: 1, totalResults: 0 };
    } finally {
      setLoading(false);
    }
  }, []);
  
  // Cargar datos iniciales cuando se monte el componente
  useEffect(() => {
    loadFeaturedPrograms();
    loadNewPrograms();
  }, [loadFeaturedPrograms, loadNewPrograms]);
  
  // Valores proporcionados por el contexto
  const value = {
    loading,
    error,
    allPrograms,
    featuredPrograms,
    newPrograms,
    popularPrograms,
    pagination,
    loadAllPrograms,
    loadFeaturedPrograms,
    loadNewPrograms,
    getProgramById,
    searchPrograms,
    getProgramsByCategory
  };
  
  return (
    <ProgramsContext.Provider value={value}>
      {children}
    </ProgramsContext.Provider>
  );
};

export default ProgramsContext;
