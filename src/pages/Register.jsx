import { Button, TextInput, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Registro</h1>
      <Stack spacing="sm" style={{ maxWidth: 300 }}>
        <TextInput label="Nombre" placeholder="Tu nombre" />
        <TextInput label="Correo electrónico" placeholder="ejemplo@correo.com" />
        <TextInput label="Contraseña" placeholder="********" type="password" />
        <Button fullWidth>Registrar</Button>
        <Button variant="subtle" onClick={() => navigate('/login')}>
          Ir a Login
        </Button>
        <Button variant="subtle" onClick={() => navigate('/')}>
          Volver al inicio
        </Button>
      </Stack>
    </>
  );
}
