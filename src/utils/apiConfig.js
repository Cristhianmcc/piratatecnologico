// // Archivo de configuración para la API
// const API_CONFIG = {
//   BASE_URL: 'http://localhost:8080/api',
//   TIMEOUT: 10000 // 10 segundos
// };

// export default API_CONFIG;
// Archivo de configuración para la API
const API_CONFIG = {
  // Usa la variable de entorno en producción, o localhost en desarrollo
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  TIMEOUT: 10000 // 10 segundos
};

export default API_CONFIG;