function Card({id, url, click}){

  function hola(){
    console.log("hola");
  }

  return(
    <>
      <img id={id} className="card" src={url} onClick={click}></img>
    </>
  )
}


export default Card
