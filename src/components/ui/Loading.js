import React from 'react';
import './Loading.css';

const Loading = ({ message = 'Cargando...' }) => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loading;
