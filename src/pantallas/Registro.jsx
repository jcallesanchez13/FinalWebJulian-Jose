
import { Link } from 'react-router-dom';

function Registro() {
  return (
    <div className="contenedor">
      <h2>Registro de Usuario</h2>

      <form>
        <input
          type="text"
          placeholder="Nombre completo"
        />
        <br />

        <input
          type="email"
          placeholder="Correo electrónico"
        />
        <br />

        <input
          type="password"
          placeholder="Contraseña"
        />
        <br />

        <button type="submit">Registrarse</button>
      </form>

      <p>
        ¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
      </p>
    </div>
  );
}

export default Registro;

  