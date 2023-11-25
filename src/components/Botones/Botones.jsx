

const Botones = ({ stock, contador, handleClickSuma, handleClickResta, handleClickAgregar }) => {

    
    const classAbility = stock === 0 ? "btn btn-primary comprar-disabled" : "btn btn-primary";

   

        return (
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <div className="row border border-contador rounded align-items-center">
                            <div className="col text-center">
                                <button className="btn btn-blanco" onClick={handleClickResta}>-</button>
                            </div>
                            <div className="col text-center">
                                <input className="input-contador" value={contador} readOnly></input>
                            </div>
                            <div className="col text-center">
                                <button className="btn btn-blanco" onClick={handleClickSuma}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className={classAbility} onClick={()=>handleClickAgregar(contador)} disabled={!stock} >Agregar al carrito</button>
                    </div>
                </div>
            </div>

        )
    }

    export default Botones