import { useState } from 'react'
import '../styles/App.css'
import Formulario from './Formulario.jsx'
import MemoryGame from './MemoryGame.jsx'

function App() {

  return (
    <div className='principal'>
        <div className='ejemplos'>  
          <Formulario />
        </div>
        <div className='ejemplos'>
          <MemoryGame />
        </div>
    </div>
  )
}

export default App
