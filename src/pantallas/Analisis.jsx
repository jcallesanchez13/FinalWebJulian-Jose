
import { Link } from 'react-router-dom';

function AnalisisFinanciero() {
  return (
    <div className="contenedor">
      <h2>Análisis Financiero</h2>

      <div className="metricas">
        <p><strong>Promedio de ingresos:</strong> $0.00</p>
        <p><strong>Promedio de egresos:</strong> $0.00</p>
        <p><strong>Porcentaje de ahorro:</strong> 20%</p>
        <p><strong>Gasto promedio por categoría:</strong></p>
        <ul>
          <li>Alimentación: $150</li>
          <li>Transporte: $50</li>
          <li>Entretenimiento: $100</li>
        </ul>
        <p><strong>Relación ingresos/egresos:</strong> 1.5</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/dashboard">
          <button>Volver al Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default AnalisisFinanciero;
