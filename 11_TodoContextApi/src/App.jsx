import { useEffect, useState } from 'react'
import { TodoProvider } from './Context'
import TodoItem from './component/todoItem'
import TodoForm from './component/todoForm'


// basic context functionality
function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{id : Date.now(), ...todo}, ...prevTodo])
  }


  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  // jo jo id match nhi kregi voh aayega, jo match kr jaayega voh vhi rhejaayega 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  } 

  const toggleComplete = (id) => {
    // phle saari values leli fir override kr di jo match kri
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }


  // local storage functionality
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* keys: here help to indentify every unique value bcz we know div can be repeated -> it future it will degreat our performanze */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                            className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
      </div>
    </TodoProvider>
  )
}
export default App
