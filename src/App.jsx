import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './pantallas/InicioSesion';
import Registro from './pantallas/Registro';
import Dashboard from './pantallas/Dashboard';
import Transacciones from './pantallas/Transacciones';
import Categorias from './pantallas/Categorias';
import Analisis from './pantallas/Analisis';
import ListadoTransacciones from './pantallas/ListadoTransacciones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registrarse" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrar" element={<Transacciones />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/analisis" element={<Analisis />} />
        <Route path="/listado" element={<ListadoTransacciones />} />
      </Routes>
    </Router>
  );
}

export default App;
