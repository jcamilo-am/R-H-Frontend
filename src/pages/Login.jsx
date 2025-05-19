import { Button, TextInput, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login</h1>
      <Stack spacing="sm" style={{ maxWidth: 300 }}>
        <TextInput label="Correo electrónico" placeholder="ejemplo@correo.com" />
        <TextInput label="Contraseña" placeholder="********" type="password" />
        <Button fullWidth>Ingresar</Button>
        <Button variant="subtle" onClick={() => navigate('/register')}>
          Crear una cuenta
        </Button>
        <Button variant="subtle" onClick={() => navigate('/')}>
          Volver al inicio
        </Button>
      </Stack>
    </>
  );
}
