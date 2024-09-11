import { useState, useEffect } from "react"
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm"

// const initialTodos = [
//     { id: 1, text: "walk the dog", completed: false },
//     { id: 3, text: "walk the cat", completed: false },
//     { id: 4, text: "walk the fish", completed: true },
//     { id: 6, text: "walk the chicken", completed: true }
// ]
const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) return [];
    return data;
}
export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }
    const toggleChecked = (todo) => {
        const index = todos.findIndex(item => item.id == todo.id)
        todos[index].completed = !todos[index].completed;
        setTodos([...todos]);
    }
    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return (
                [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
            )
        })
    }
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem todo={todo}
                        key={todo.id}
                        removeTodo={() => removeTodo(todo.id)}
                        toggleChecked={() => { toggleChecked(todo) }} />
                )

                )}
                <TodoForm addTodo={addTodo} />
            </List>
        </>
    )
}


