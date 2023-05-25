import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './componentes/Modal'


function App() {
  const [click, setClick] = useState(false);
  const [nombre, setNombre] = useState(""); 

  return (
    <>
      <Modal></Modal>
    </>
  )
}

export default App
