import CartWidget from "../CartWidget/CartWidget";
import WishList from "../WishList/WishList";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import LogoMiCuenta from "../LogoMiCuenta/LogoMiCuenta";
const NavBar = ({ onQueryBusqueda }) => {
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
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Por género
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/libros/cf">
                      Ciencia ficción
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/nh">
                      Novela histórica
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/di">
                      Distopía
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/av">
                      Aventuras
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/bi">
                      Biográfico
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/po">
                      Policial
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/de">
                      Denuncia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/hi">
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/cl">
                      Clásicos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/libros/pt">
                      Poesía
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Por autor
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/autor/1">
                      J K Rowling
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/autor/2">
                      George Orwell
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/autor/4">
                      Julio Verne
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/autor/3">
                      Stieg Larsson
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/autor/todos">
                      TODOS
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Por idioma
                </a>
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
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sagas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/saga/1">
                      Millenium
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/saga/2">
                      Harry Potter
                    </Link>
                  </li>
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
