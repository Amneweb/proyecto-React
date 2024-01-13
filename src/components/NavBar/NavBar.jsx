import CartWidget from "../CartWidget/CartWidget";
import WishList from "../WishList/WishList";
import Logo from "../Logo/Logo";
import { useCollections } from "../../hooks/useCollections";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import LogoMiCuenta from "../LogoMiCuenta/LogoMiCuenta";
const NavBar = ({ onQueryBusqueda }) => {
  const autores = useCollections("autores", "nombre");
  const categorias = useCollections("categorias", "titulo");
  const sagas = useCollections("sagas", "id");
  return (
    <nav className="navbar sticky-top">
      <div className="container-fluid nav-flex-contenedor">
        <div className="nav-flex-item superior">
          <Link className="navbar-brand" to="/">
            <Logo />
            <span className="texto-logo">LIBROS</span>
          </Link>
          <SearchBar onQueryBusqueda={onQueryBusqueda} />
          <LogoMiCuenta />
          <WishList />
          <CartWidget />
        </div>

        <div className="navbar nav-flex-item navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
            <ul className="navbar-nav mb-2 mb-lg-0 g-col-6">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Por género
                </button>
                <ul className="dropdown-menu">
                  {categorias ? (
                    categorias.map((categoria) => (
                      <li key={`${categoria.id}`}>
                        <Link
                          to={`/libros/${categoria.id}`}
                          className="dropdown-item"
                        >
                          {categoria.titulo}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>Cargando datos...</p>
                  )}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Por autor
                </button>
                <ul className="dropdown-menu">
                  {autores ? (
                    autores.map((autor) => (
                      <li key={`${autor.id}`}>
                        <Link
                          to={`/autor/${autor.id}`}
                          className="dropdown-item"
                        >
                          {autor.nombre}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>Cargando datos...</p>
                  )}

                  <li>
                    <Link className="dropdown-item" to="/autor/todos">
                      TODOS
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Por idioma
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/idioma/EN">
                      Inglés
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/idioma/ES">
                      Español
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sagas
                </button>
                <ul className="dropdown-menu">
                  {sagas ? (
                    sagas.map((saga) => (
                      <li key={`${saga.id}`}>
                        <Link to={`/saga/${saga.id}`} className="dropdown-item">
                          {saga.nombre}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>Cargando datos...</p>
                  )}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/libros">
                  TODOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
