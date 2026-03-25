import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // console.log(process.env.REACT_APP_WRITE_TEST)

  console.log(import.meta.env.VITE_WRITE_TEST)


  return (
    <>
      {/* bcz the enviroment varible file define under the process */}
      <h1>This is testing..</h1>
    </>
  )
}

export default App
