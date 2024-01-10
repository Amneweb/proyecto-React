import React from "react";
import { Link } from "react-router-dom";
import { useCollections } from "../../hooks/useCollections";

const Footer = () => {
  const categorias = useCollections("categorias", "titulo");
  const autores = useCollections("autores", "nombre");

  return (
    <div className="container-fluid footer-oscuro pt-3 mb-0">
      <footer className="container pt-3 mb-0">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h2 className="text-light">género</h2>
            <ul className="nav flex-column">
              {categorias &&
                categorias.map((categoria) => (
                  <li key={`${categoria.id}`} className="nav-item mb-2">
                    <Link
                      to={`/libros/${categoria.id}`}
                      className="nav-link p-0 text-body-secondary"
                    >
                      {categoria.titulo}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h2 className="text-light">autores</h2>
            <ul className="nav flex-column">
              {autores &&
                autores.map((autor) => (
                  <li key={`${autor.id}`} className="nav-item mb-2">
                    <Link
                      to={`/autor/${autor.id}`}
                      className="nav-link p-0 text-body-secondary"
                    >
                      {autor.nombre}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h2 className="text-light">miscelánea</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/novedades"
                  className="nav-link p-0 text-body-secondary"
                >
                  Novedades
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/sagas" className="nav-link p-0 text-body-secondary">
                  Sagas
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/faq" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/nosotros"
                  className="nav-link p-0 text-body-secondary"
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5 className="text-light fw-bold mb-3">
                Suscribite a nuestro newsletter
              </h5>
              <p className="small text-light mb-3">
                Encontrá en tu inbox toda la información sobre libros, autores,
                editoriales y por supuesto, sobre nosotros
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control form-control-warning"
                  placeholder="Email address"
                />
                <button className="btn btn-warning" type="button">
                  Subscribite
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
          <p className="text-light">
            © 2023 MW Libros, Inc. Todos los derechos reservados.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
