function Card({id, url, click}){
  return(
    <>
      <img id={id} className="card" src={url} onClick={click}></img>
    </>
  )
}


export default Card
