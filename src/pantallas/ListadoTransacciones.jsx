
import React from 'react';
import { Link } from 'react-router-dom';

function ListadoTransacciones() {
  return (
    <div className="contenedor">
      <h2>Listado de Ingresos y Egresos</h2>

      <h3>Ingresos</h3>
      <ul>
        <li>$500 - Ingreso - Alimentación</li>
        <li>$200 - Ingreso - Entretenimiento</li>
        <li>$350 - Ingreso - Trabajo</li>
      </ul>

      <h3>Egresos</h3>
      <ul>
        <li>$100 - Egreso - Alimentación</li>
        <li>$50 - Egreso - Transporte</li>
        <li>$120 - Egreso - Entretenimiento</li>
      </ul>

      <div style={{ marginTop: '20px' }}>
        <Link to="/dashboard">
          <button>Volver al Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default ListadoTransacciones;

