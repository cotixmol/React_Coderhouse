import './App.css';


function App() {
  return (
    <nav className="contenedor navbar navbar-expand navbar-light bg-light">
  <a className="navbar-brand titulo" href="../index.html">Tienda de Mascotas</a>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="../index.html">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../index.html">Articulos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../index.html">Adopción</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../index.html">Nosotros</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default App;
