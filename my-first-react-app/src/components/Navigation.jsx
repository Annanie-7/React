function Navigation(){
    const sections = ["Home","Python","C","C++","Java","Ruby","Swift","Rust","Kotlin"];


    
    const sectionList = sections.map((section) => <div className='navDiv' key={section}><button key={section + "button"} >{section}</button></div>)

    return(
        <div className='navigation'>   
            {sectionList}
        </div>
    )
}


export default Navigation