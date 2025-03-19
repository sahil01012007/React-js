import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider, TodoContext, useTodo } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? todo : eachTodo ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo, completed: !eachTodo.completed} : eachTodo )) // eachTodo.completed = !eachTodo.completed is incorrect syntax here becz React re-renders components when it detects a new state object and If you modify state directly, the reference to the object remains the same, and React may not recognize the change, hence, it may will not update on the UI
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete} }>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        < TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((eachTodo) => (
                          <div key={eachTodo.id} className='w-full'>
                            <TodoItem todo={eachTodo} />
                          </div>
                        ))}
                    </div>
                </div>
      </div>
    </TodoProvider>
  )
}

export default App
