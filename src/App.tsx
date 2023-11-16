// App.js

import React, { useState } from 'react';
import './App.css';
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';
//import RobotBackground from './components/RobotBackground/RobotBackground';

function App() {
  const [mostrarWelcomeBlock, setMostrarWelcomeBlock] = useState(true);
  const [mostrarDivs, setMostrarDivs] = useState(false);

  const handleConnect = () => {
    setMostrarWelcomeBlock(false);
    setTimeout(() => {
      setMostrarDivs(true);
    }, 3000); // Muestra los divs después de 3 segundos
  };

  return (
    <div className="App">
      {mostrarWelcomeBlock && <WelcomeBlock onConnect={handleConnect} />}
      {mostrarDivs && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <div style={{ flex: 9, width: '100%', backgroundColor: 'lightblue' }}>Div 1</div>
          <div style={{ flex: 1, width: '100%', backgroundColor: 'lightgreen' }}>Div 2</div>
        </div>
      )}
    </div>
  );
}

export default App;
