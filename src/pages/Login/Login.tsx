import React, { useState, FormEvent } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

interface LoginProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario.
    // Si la autenticación es exitosa, puedes llamar a la función onLogin.
    onLogin();
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl id="username">
        <FormLabel>Nombre de usuario</FormLabel>
        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormControl>
      <Button type="submit">Iniciar sesión</Button>
    </Box>
  );
}

export default LoginPage;
