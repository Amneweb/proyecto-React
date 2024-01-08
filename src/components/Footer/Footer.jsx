import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDatosCategorias } from "../../helpers/fetchDatosCategorias";
import { fetchDatosAutorTodos } from "../../helpers/fetchDatosAutor";
import Loader from "../Loader/Loader";

const Footer = () => {
  const [categorias, setCategorias] = useState([]);
  const [autores, setAutores] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchDatosCategorias()
      .then((respuesta) => setCategorias(respuesta))
      .finally(() => {
        setLoader(false);
      });
  }, []);
  useEffect(() => {
    fetchDatosAutorTodos()
      .then((respuesta) => setAutores(respuesta))
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="container-fluid footer-oscuro">
      {loader && <Loader />}
      <footer className="py-5 container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h2 className="text-light">género</h2>
            <ul className="nav flex-column">
              {categorias.map((categoria) => (
                <li className="nav-item mb-2">
                  <Link
                    to={`/libros/${categoria.id}`}
                    key={`${categoria.id}`}
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
              {autores.map((autor) => (
                <li className="nav-item mb-2">
                  <Link
                    to={`/autor/${autor.id}`}
                    key={`${autor.id}`}
                    className="nav-link p-0 text-body-secondary"
                  >
                    {autor.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
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
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 MW Libros, Inc. Todos los derechos reservados.</p>
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
