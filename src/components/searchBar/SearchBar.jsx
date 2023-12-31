import React from "react";
import Lupa from "./Lupa";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ onQueryBusqueda }) => {
  const navigate = useNavigate();
  function handleChange(e) {
    onQueryBusqueda(e.target.value);
    e.target.value !== "" ? navigate("/busqueda") : navigate("/");
  }
  return (
    <div className="input-group search-bar flex-nowrap">
      <input
        type="text"
        className="form-control form-control-primary"
        placeholder="¿Qué buscás?"
        aria-label="Buscador"
        aria-describedby="addon-wrapping"
        onChange={handleChange}
      />
      <span className="input-group-text" id="addon-wrapping">
        <Lupa />
      </span>
    </div>
  );
};

export default SearchBar;
