function Informacion({tipo = "text",
    estilo = "textStyle",
    texto = "?????",
    change }){

    return(
        <div className="form_wrap">  
            <label>{texto} </label>
            <input type={tipo} className={estilo} onBlur={change} id={texto + "Ejemploform"}></input>
            <br></br>
        </div>
    )
}


export default Informacion