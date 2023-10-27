import React, { useState } from 'react'
import { ACTIONS } from './TodoList'

interface todoProps {
    todo: any,
    index: number,
    dispatch: any
}
const Todo: React.FC<todoProps> = ({ todo, index, dispatch }) => {
    const [modal, setModal] = useState(false);
    const [updatedName, setUpdatedName] = useState('')
    const handleEdit = () => {
        setModal(true);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (updatedName) {
            dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id, name: updatedName } });
            setModal(false);
            setUpdatedName('')
            return;
        }
        setModal(false);
        setUpdatedName('');
    }
    return (
        <>
            <h4>{index + 1}</h4>
            <ul>
                <h3></h3>
                <li><strong>Todo Id: </strong>{todo.id}</li>
                <li><strong>Todo Name: </strong>{todo.name}</li>
                <li><strong>isCompleted: </strong>
                    <input type="checkbox" value={todo.completed} onChange={() => todo.completed = !todo.completed} />
                </li>
            </ul>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete Todo</button>
            <button onClick={() => handleEdit()}>Edit Todo</button >
            {
                modal && <form onSubmit={handleSubmit}>
                    <label>New Todo Name: </label>
                    <input type='text' value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                </form>
            }
        </>
    )
}

export default Todo
