
// to use hooks import usestate {use krne k sath sath pdna bhi aana chhhiye}
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() { 
  // use usestate to render changing value in UI
  let [value , setValue] = useState(0)


  const AddingValue = () => {
  // console.log("Value Add successfully: ", ((Math.random()  * 10 ) + 1).toFixed(2))
  console.log(`current value: ${value}`)
  value  = value +  1
  setValue(value)

  }

  const removeValue = () =>{
    value = value -1;
    if(value < 0)
      resetValue()
    setValue(value)
  }

  const resetValue = () => {
    value = 0
    setValue(value)
  }

  return (
    <>
      <h1>React Counter</h1>
      <h3>Counter value = {value}</h3>

      <button
      onClick={AddingValue}
      >Add Value = {value}</button>

      <p></p>

      <button
      onClick={removeValue}
      >Remove Value = {value}</button>

      <p></p>
      <button 
      onClick={resetValue}
      >reset Value = {value}</button>
    </>
  )
}

export default App
