import Informacion from './Informacion.jsx'
import { useState } from 'react';

function Formulario(){
    //REAL TIME PHARAGRAPH TRACKING
        const [general,setGeneral] = useState("");              
        const [educacion,setEducation] = useState("");
        const [experiencia,setExperiencia] = useState(""); 

        function handleGeneral() {  //REAL TIME PHARAGRAPH TRACKING FOR GENERAL INFORMATION
            var nombre = document.getElementById("NombreEjemploform").value;
            var email = document.getElementById("EmailEjemploform").value;
            var telefono = document.getElementById("TelefonoEjemploform").value;

            setGeneral("Nombre: "+ nombre + " Email:" + email + "\n Telefono: " + telefono );
        }

        function handleEducacion() {//REAL TIME PHARAGRAPH TRACKING FOR EDUCATION INFORMATION
            var nombre = document.getElementById("NombreInstitucionEjemploform").value;
            var carrera = document.getElementById("CarreraEstudiadaEjemploform").value;
            var graduacion = document.getElementById("FechaGraduacionEjemploform").value;

            setEducation("Nombre: "+ nombre + " Carrera:" + carrera + "Fecha graduacion: " + graduacion );
        }

        function handleExperiencia() {//REAL TIME PHARAGRAPH TRACKING FOR EXPERIENCE INFORMATION
            var nombre = document.getElementById("NombreCompañiaEjemploform").value;
            var posicion = document.getElementById("PosicionEjemploform").value;
            var Responsabilidades = document.getElementById("ResponsabilidadesEjemploform").value;
            var fechai = document.getElementById("FechaInicioEjemploform").value;
            var fechaf = document.getElementById("FechaFinalEjemploform").value;

            setExperiencia("Nombre: "+ nombre + " Email:" + posicion + "Telefono: " + Responsabilidades + "fecha inicio" + fechai + "fechafinal" + fechaf  );
        }

    return(
        <> 
            <form>
                <h3>Ejemplo Formulario</h3>
                <h5>Informacion General</h5>
                <Informacion tipo="text" estilo="textStyle" texto="Nombre" change={handleGeneral} />
                <Informacion tipo="email" estilo="textStyle" texto="Email" change={handleGeneral} />
                <Informacion tipo="tel" estilo="textStyle" texto="Telefono" change={handleGeneral} />
                <h5>Educacion</h5>
                <Informacion tipo="text" estilo="textStyle" texto="NombreInstitucion" change={handleEducacion}/>
                <Informacion tipo="text" estilo="textStyle" texto="CarreraEstudiada" change={handleEducacion}/>
                <Informacion tipo="date" estilo="textStyle" texto="FechaGraduacion" change={handleEducacion}/>
                <h5>Experiencia Profesional</h5>
                <Informacion tipo="text" estilo="textStyle" texto="NombreCompañia" change={handleExperiencia}/>
                <Informacion tipo="text" estilo="textStyle" texto="Posicion" change={handleExperiencia}/>
                <Informacion tipo="textarea" estilo="textStyle" texto="Responsabilidades" change={handleExperiencia}/>
                <Informacion tipo="date" estilo="textStyle" texto="FechaInicio" change={handleExperiencia}/>
                <Informacion tipo="date" estilo="textStyle" texto="FechaFinal" change={handleExperiencia}/>
                <button className='botonFormulario' >subir</button>
            </form>
            <h5>Informacion General</h5>
            <p>{general}</p>
            <h5>Educacion</h5>
            <p>{educacion}</p>
            <h5>Experiencia Profesional</h5>
            <p>{experiencia}</p>
        </>
    )
}


export default Formulario