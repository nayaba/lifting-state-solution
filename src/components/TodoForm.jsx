import { useState } from "react"

const TodoForm = (props) => {

    const initialState = {
        todo: ''
    }

    const [formData, setFormData] = useState(initialState)
    // const [todo, setTodo] = useState('')

    const handleChange = (event) => {
        const newTodo = {[event.target.name]: event.target.value}
        setFormData(newTodo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // setTodo(formData.todo)
        props.addTodo(formData)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* {todo} */}
            <label htmlFor="">Todo: </label>
            <input type="text" onChange={handleChange} name='todo' value={formData.todo} />
            <button style={{backgroundColor: "violet"}} type="submit">
                Create to-do</button>
        </form>
    )
}

export default TodoForm