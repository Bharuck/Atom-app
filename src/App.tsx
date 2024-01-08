import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import MControlPage from './pages/MControl/MControl';
import MonitoringPage from './pages/Monitoring/Monitoring';
import IAFunctionsPage from './pages/IAFunctions/IAFunctions';
import InfoPage from './pages/Info/Info';

interface Route {
  path: string;
  name: string;
  iconName: string;
  component: React.ReactElement;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const routes: Route[] = [
    { path: '/home', name: 'Home', iconName: 'GiRobotGolem', component: <HomePage /> },
    { path: '/manual-control', name: 'Control Manual', iconName: 'VscSettings', component: <MControlPage /> },
    { path: '/monitoring', name: 'Monitoreo', iconName: 'ImStatsDots', component: <MonitoringPage /> },
    { path: '/ia-functions', name: 'Funciones IA', iconName: 'GiAndroidMask', component: <IAFunctionsPage /> },
    { path: '/info', name: 'Información', iconName: 'GrStatusInfo', component: <InfoPage /> },
  ];

  return (
    <Router>
      {isLoggedIn && <NavBar routes={routes} />}
      <Box height="90vh">
        <Routes>
          <Route path="/" element={isLoggedIn ? <HomePage /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />} />
          {isLoggedIn && (
            <>
              {routes.map(route => (
                <Route key={route.path} path={route.path} element={route.component} />
              ))}
            </>
          )}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
