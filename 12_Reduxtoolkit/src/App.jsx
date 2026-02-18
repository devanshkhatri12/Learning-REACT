import { useState } from 'react'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
