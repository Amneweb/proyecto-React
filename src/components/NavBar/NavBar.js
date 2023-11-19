import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><Logo /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse menu"  id="navbarNavDropdown">
          <ul className="navbar-nav mb-2 mb-lg-0 g-col-6">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Por género
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Ciencia ficción</a></li>
            <li><a className="dropdown-item" href="#">Novela histórica</a></li>
            <li><a className="dropdown-item" href="#">Distopía</a></li>
            <li><a className="dropdown-item" href="#">Aventuras</a></li>
          </ul>
        </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Por autor
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Isabel Allende</a></li>
            <li><a className="dropdown-item" href="#">George Orwell</a></li>
            <li><a className="dropdown-item" href="#">Julio Verne</a></li>
            <li><a className="dropdown-item" href="#">Gabriel García Márquez</a></li>
          </ul>
        </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Por idioma
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Inglés</a></li>
            <li><a className="dropdown-item" href="#">Español</a></li>
          </ul>
        </li>
        <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Sagas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Novedades</a>
            </li>
            
          </ul>
          
        </div>
        <CartWidget />
      </div>

    </nav>
  )
}
export default NavBar