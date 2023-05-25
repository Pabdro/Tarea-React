import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarea from './componentes/Tarea'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tarea/>
    </>
  )
}

export default App
