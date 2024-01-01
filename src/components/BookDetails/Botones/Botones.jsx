const Botones = ({
  stock,
  contador,
  handleClickSuma,
  handleClickResta,
  handleClickAgregar,
}) => {
  const classAbility =
    stock === 0 ? "btn btn-primary comprar-disabled" : "btn btn-primary";
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4 px-0">
          <div
            className="btn-group d-flex"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              onClick={handleClickResta}
              className="btn btn-outline-primary flex-fill"
            >
              -
            </button>
            <button
              type="input"
              className="btn btn-outline-primary flex-fill"
              readOnly
            >
              {contador}
            </button>
            <button
              type="button"
              onClick={handleClickSuma}
              className="btn btn-outline-primary flex-fill"
            >
              +
            </button>
          </div>
        </div>

        <div className="col col-md-8">
          <button
            className={classAbility}
            onClick={() => {
              handleClickAgregar(contador);
            }}
            disabled={!stock}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Botones;
