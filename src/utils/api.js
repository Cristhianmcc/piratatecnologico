// Servicio para manejar las llamadas a la API
import API_CONFIG from './apiConfig';

// Controlador de errores genérico
const handleError = (error) => {
  console.error('API Error:', error);
  let message = 'Ocurrió un error desconocido';
  
  if (error.response) {
    // El servidor respondió con un código de error
    message = error.response.data.message || `Error ${error.response.status}`;
  } else if (error.request) {
    // La petición se hizo pero no se recibió respuesta
    message = 'No se pudo conectar con el servidor';
  } else {
    // Error al configurar la petición
    message = error.message;
  }
  
  return { error: true, message };
};

// Funciones auxiliares para trabajar con localStorage
const getToken = () => localStorage.getItem('userToken');

const getAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Funciones para el API de programas
export const getProgramsAPI = async (page = 1, limit = 20, category = null) => {
  try {
    let url = `${API_CONFIG.BASE_URL}/programs?page=${page}&limit=${limit}`;
    if (category) url += `&category=${encodeURIComponent(category)}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error obteniendo programas');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getProgramByIdAPI = async (id) => {
  try {
    console.log(`Obteniendo programa con ID: ${id} de ${API_CONFIG.BASE_URL}/programs/${id}`);
    const response = await fetch(`${API_CONFIG.BASE_URL}/programs/${id}`);
    
    if (!response.ok) {
      console.error(`Error en la petición: ${response.status} ${response.statusText}`);
      if (response.status === 404) {
        return { error: true, message: 'Programa no encontrado', status: 404 };
      }
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Datos recibidos del programa:', data);
    
    // Verificar si los datos son válidos
    if (!data || (typeof data === 'object' && Object.keys(data).length === 0)) {
      console.error('Se recibió un objeto vacío como respuesta');
      return { error: true, message: 'Datos de programa inválidos' };
    }
    
    return data;
  } catch (error) {
    console.error('Error en getProgramByIdAPI:', error);
    return handleError(error);
  }
};

export const searchProgramsAPI = async (query, filters = {}, page = 1, limit = 20) => {
  try {
    let url = `${API_CONFIG.BASE_URL}/programs/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`;
    
    // Añadir filtros adicionales
    Object.entries(filters).forEach(([key, value]) => {
      if (value) url += `&${key}=${encodeURIComponent(value)}`;
    });
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la búsqueda');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getFeaturedProgramsAPI = async (limit = 8) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/programs/featured?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Error obteniendo programas destacados');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getProgramsByCategoryAPI = async (category, page = 1, limit = 20) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/programs/category/${encodeURIComponent(category)}?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error(`Error obteniendo programas de la categoría ${category}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};


// Funciones para autenticación
export const loginAPI = async (credentials) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al iniciar sesión');
    }
    
    const data = await response.json();
    // Guardar token en localStorage
    localStorage.setItem('userToken', data.token);
    localStorage.setItem('userData', JSON.stringify({
      id: data._id,
      username: data.username,
      isAdmin: data.isAdmin,
    }));
    
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const registerAPI = async (userData) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al registrar usuario');
    }
    
    const data = await response.json();
    // Guardar token en localStorage
    localStorage.setItem('userToken', data.token);
    localStorage.setItem('userData', JSON.stringify({
      id: data._id,
      username: data.username,
      isAdmin: data.isAdmin,
    }));
    
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const logoutAPI = () => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('userData');
  return { success: true };
};

export const getCurrentUserAPI = () => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

export const isLoggedInAPI = () => {
  return !!getToken();
};

export const isAdminAPI = () => {
  const userData = getCurrentUserAPI();
  return userData ? userData.isAdmin : false;
};
