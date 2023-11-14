import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
const NavBar =() => {
    return (
        <nav data-bs-theme="dark" className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <a className="navbar-brand" href="#"><Logo /></a>
            <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Redes sociales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Posters</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Papelería y tarjetería</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Desarrollo de marca</a>
        </li>
           </ul>
           <CartWidget />
            </div>
      </div>

        </nav>
    )
}
export default NavBar