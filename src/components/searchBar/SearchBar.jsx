import React from "react";
import Lupa from "./Lupa";
const SearchBar = () => {
  return (
    <div className="input-group search-bar flex-nowrap">
      <span className="input-group-text" id="addon-wrapping">
        <Lupa />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="¿Qué buscás?"
        aria-label="Buscador"
        aria-describedby="addon-wrapping"
      />
    </div>
  );
};

export default SearchBar;
