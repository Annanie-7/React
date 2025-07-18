function Informacion({tipo = "text",
    estilo = "textStyle",
    texto = "?????",
    change }){

    const inputType = {
        tipo: tipo,
        estilo: estilo,
    }

    return(
        <div className="form_wrap">  
            <label>{texto} </label>
            <input type={inputType.tipo} className={inputType.estilo} onBlur={change} id={texto + "Ejemploform"}></input>
            <br></br>
        </div>
    )
}


export default Informacion