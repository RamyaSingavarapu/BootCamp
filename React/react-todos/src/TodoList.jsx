import { useState } from "react"
import List from '@mui/material/List';
import TodoItem from "./TodoItem";

const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 3, text: "walk the cat", completed: false },
    { id: 4, text: "walk the fish", completed: true },
    { id: 6, text: "walk the chicken", completed: true }
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos)
    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} />
                )

                )}
            </List>
        </>
    )
}


