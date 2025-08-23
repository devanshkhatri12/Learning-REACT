import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {


  let [counter, setState] = useState(10)

  const increament = () => {
    // counter  = counter + 1;
    // Que. what the value of counter after this, by how many times it will increase?
    // setState(counter +1);             // if we do this it will only increase by 1 total
    // setState(counter +1);
    // setState(counter +1);
    // setState(counter +1);
    // setState(counter +1);


    setState(counter => counter +1)     // and in this it will increase by 1 at every step bcz it take previous state
    setState(counter => counter +1)
    setState(counter => counter +1)

    // we also write it as..
    setState(prevCounter => prevCounter + 1)
  }

  const decreament = () => {
    counter  = counter - 1;
    setState(counter);
  }

  return (
    <>
      <h1>React Counter</h1>

      <button onClick={increament}>Increase = {counter}</button>
      <p></p>
      <button onClick={decreament}>Decrease = {counter}</button>
    </>
  )
}

export default App
