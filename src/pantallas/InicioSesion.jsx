
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="contenedor">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo electrónico" className="input" />
        <input type="password" placeholder="Contraseña" className="input" />
        <button type="submit" className="btn">Iniciar sesión</button>
      </form>
      <div className="margin-top">
        <p>No tienes cuenta? <Link to="/registrarse">Registrarse</Link></p>
      </div>
    </div>
  );
}

export default Login;
