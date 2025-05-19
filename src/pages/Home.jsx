import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Página de Inicio</h1>
      <Button onClick={() => navigate('/login')} style={{ marginRight: 10 }}>
        Ir a Login
      </Button>
      <Button onClick={() => navigate('/register')}>Ir a Registro</Button>
    </>
  );
}
