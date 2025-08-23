import { useState } from 'react'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  const obj = {
    naam: "dk",
    age: 21,
    dollar: "21$",
    rupee: "100rs"
  }

  let Arr = [1, 2, 3]

  return (
    <>
      <div className='text-3xl bg-green-300 rounded-2xl text-black '>Components</div>
      <Card myName={obj.naam}  price={obj.dollar}/>
      <Card  price={obj.rupee}/>
    </>
  )
}

export default App


