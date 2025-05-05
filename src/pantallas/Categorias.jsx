
import { Link } from 'react-router-dom';

function AdministrarCategorias() {
  return (
    <div className="contenedor">
      <h2>Administrar Categorías de Gasto</h2>

      <form>
        <input
          type="text"
          placeholder="Nueva categoría"
        />
        <br />

        <button type="submit">Agregar categoría</button>
      </form>

      <h3>Categorías actuales:</h3>
      <ul>
        <li>
          Alimentación <button>Eliminar</button>
        </li>
        <li>
          Transporte <button>Eliminar</button>
        </li>
        <li>
          Entretenimiento <button>Eliminar</button>
        </li>
      </ul>

      <div style={{ marginTop: '20px' }}>
        <Link to="/dashboard">
          <button>Volver al Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default AdministrarCategorias;
