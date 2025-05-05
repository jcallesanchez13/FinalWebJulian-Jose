
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="contenedor">
      <h2>Bienvenido, [Nombre del usuario]</h2>
      <h3>Resumen Financiero</h3>

      <div className="resumen">
        <p><strong>Saldo disponible:</strong> $0.00</p>
        <p><strong>Ingresos totales:</strong> $0.00</p>
        <p><strong>Egresos totales:</strong> $0.00</p>
      </div>

      <div className="botones-dashboard">
  <Link to="/registrar"><button>Registrar ingreso o egreso</button></Link>
  <Link to="/categorias"><button>Administrar categorías</button></Link>
  <Link to="/analisis"><button>Ver análisis financiero</button></Link>
  <Link to="/listado"><button>Ver Historial de Transacciones</button></Link>
  <Link to="/"><button>Cerrar Sesión</button></Link>
</div>
    </div>
  );
}

export default Dashboard;
