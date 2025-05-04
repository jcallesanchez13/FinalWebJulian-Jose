// src/pages/RegistrarTransaccion.jsx
import { Link } from 'react-router-dom';

function RegistrarTransaccion() {
  return (
    <div className="contenedor">
      <h2>Registrar Ingreso o Egreso</h2>

      <form>
        <input
          type="number"
          placeholder="Valor"
        />
        <br />

        <select>
          <option value="">Seleccionar tipo</option>
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </select>
        <br />

        <select>
          <option value="">Seleccionar categoría</option>
          <option value="alimentacion">Alimentación</option>
          <option value="transporte">Transporte</option>
          <option value="entretenimiento">Entretenimiento</option>
        </select>
        <br />

        <button type="submit">Registrar</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <Link to="/dashboard">
          <button>Volver al Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default RegistrarTransaccion;
