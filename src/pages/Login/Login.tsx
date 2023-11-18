import React, { useState, useEffect, FormEvent } from 'react';
import { Button, FormControl, FormLabel, Image, Input, Center, Text, Flex, Stack } from '@chakra-ui/react';

interface LoginProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [stage, setStage] = useState(0);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
    const delay = stage === 1 ? 4000 : 2000;
    const timer = setTimeout(() => {
      if (stage === 1 && isLoginSuccessful) {
        setStage(stage + 1);
      } else if (stage < 1) {
        setStage(stage + 1);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [stage, isLoginSuccessful]);

  useEffect(() => {
    if (stage === 0) {
      const welcome = "Biienvenido";
      let i = 0;
      const timer = setInterval(() => {
        if (i < welcome.length) {
          setWelcomeText((prevText) => prevText + welcome.charAt(i));
          i++;
        }
        if (i === welcome.length) {
          clearInterval(timer);
        }
      }, 80); // Ajusta este valor para cambiar la velocidad a la que se escribe el texto
      return () => clearInterval(timer);
    }
  }, [stage]);


  const authenticateUser = async (username: string, password: string) => {
    // Aquí puedes agregar la lógica para autenticar al usuario.
    // Por ahora, solo comprobamos si el nombre de usuario es "will" y la contraseña es "2001".
    return username === 'will' && password === '2001';
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const loginSuccessful = await authenticateUser(username, password);
    if (loginSuccessful) {
      onLogin();
      setIsLoginSuccessful(true);
    }
  };

  return (
    <Flex width="100vw" height="100vh" justifyContent="center" alignItems="center">
      <Stack as="form" onSubmit={handleSubmit} width="400px" height={stage === 0 || stage === 2 ? "100px" : "400px"} backgroundColor="yellow.100" padding="10px" spacing={3} borderRadius="md">
        {stage === 0 && <Center><Text fontSize="30px" fontFamily="Arial">{welcomeText}</Text></Center>}
        {stage >= 1 && !isLoginSuccessful && (
          <>
            <Center>
              <Image borderRadius="full" boxSize="150px" src="/images/Robot2.png" mb={2} />
            </Center>
            <FormControl id="username">
              <FormLabel>Usuario</FormLabel>
              <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit">Iniciar sesión</Button>
          </>
        )}
        {stage === 2 && isLoginSuccessful && <Text>Conectando...</Text>}
      </Stack>
    </Flex>
  );
}

export default LoginPage;
