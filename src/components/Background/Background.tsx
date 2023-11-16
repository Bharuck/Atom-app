import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    //Scene
    const scene = new THREE.Scene();
  }, []);

  return (
    <div className='Contenedor 3D' ref={mountRef}>
      <h1>
        Hola mundo
      </h1>
    </div>
  );
};

export default Background;
