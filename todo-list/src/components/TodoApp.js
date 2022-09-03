import React, {useState} from 'react'
import Todo from './Todo'
import './TodoApp.css'

const TodoApp = () => {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([])

    const handleChange = event => {
        const value = event.target.value
        setTitle(value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            complete: false
        }

        const temp = [...todos]
        temp.push(newTodo)

        setTodos(temp)

        setTitle('')
    }

    const handleUpdate = (id,value) => {
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos(temp)
    }

    const handleDelete = (id) => {
        const temp = todos.filter(item => item.id !== id)
        setTodos(temp)
    }

  return (
    <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input 
                onChange={handleChange}
                type="text" 
                className="todoInput" />
            <input 
                onClick={handleSubmit} 
                type="submit" 
                value="Create To Do" 
                className="buttonCreate"
            />
        </form>

        <div className="todosContainer">
            {
                todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
  )
}

export default TodoApp