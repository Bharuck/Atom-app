// ./components/WelcomeBlock/WelcomeBlock.js

import React, { useState, useEffect, FormEvent } from 'react';
import './WelcomeBlock.css';

function WelcomeBlock({ onConnect }) { // Asegúrate de que 'onConnect' esté entre las llaves
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const [mostrarBloqueVerde, setMostrarBloqueVerde] = useState(false);
  const [textoBienvenida, setTextoBienvenida] = useState('¡Bienvenido!');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTexto(false);
      setMostrarBloqueVerde(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTextoBienvenida('Conectando...');
    setMostrarTexto(true);
    setTimeout(() => {
      setMostrarBloqueVerde(false);
    }, 1000);
    onConnect(); // Llama a onConnect cuando se presiona el botón
  };

  return (
    <div className="contenedor">
      <div className="contenedor-bienvenida">
        {mostrarTexto ? textoBienvenida : '🎉'}
      </div>
      {mostrarBloqueVerde && (
        <div className="bloque-verde">
          <form onSubmit={handleSubmit}>
            <label>
              IP:
              <input type="text" name="ip" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" />
            </label>
            <button type="submit">Conectar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default WelcomeBlock;
