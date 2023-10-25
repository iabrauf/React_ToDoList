import { useReducer, useState } from "react"
import Todo from "./Todo"

export const ACTIONS = {
    NEW_TODO: 'newTodo',
    DELETE_TODO: 'deleteTodo',
    EDIT_TODO: 'editTodo'
}

const newTodo = (name: string) => {
    return {
        id: Date.now(),
        name,
        completed: false
    }
}
const deleteTodo = (todos: any, id: number) => {
    return todos.filter((todo: any) => todo.id !== id)
}

const updateTodo = (todos: any, payload: any) => {
    return todos.map((todo: any) => {
        if (todo.id === payload.id) return { ...todo, name: payload.name }
        return todo;
    })
}
const reducer = (todos: any, action: any) => {
    switch (action.type) {
        case ACTIONS.NEW_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.DELETE_TODO:
            return deleteTodo(todos, action.payload.id);
        case ACTIONS.EDIT_TODO:
            return updateTodo(todos, action.payload)
    }
    return [...todos]
}

const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch({
            type: ACTIONS.NEW_TODO,
            payload: { name: name }
        })
        setName('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)}
                />
            </form>
            <h1>Todo List</h1>
            {todos.map((todo: any, index: number) => {
                return <Todo key={todo.id} todo={todo} index={index} dispatch={dispatch} />
            })}
        </>
    )
}

export default TodoList

