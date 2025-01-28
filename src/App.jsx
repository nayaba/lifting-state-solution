import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'

const App = () => {

    const [todos, setTodos] = useState([])

  const addTodo = (formData) => {
    // use the todos setter to add formData to todos array
    const newTodos = [...todos, formData]
    setTodos(newTodos)
  }

  return (
    <>
      <h1>To Do App</h1>
      <TodoForm addTodo={addTodo} />
      {/* <TodoItems /> */}
    </>
  )
}

export default App
