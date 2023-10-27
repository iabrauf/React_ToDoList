import { useDispatch } from "react-redux"
import { removeTodo } from "../features/slices/todoSlice";

const Todo = ({ todo, inputValue, setId }) => {
    const dispatch = useDispatch();

    function handleEdit(todo) {
        inputValue.current.focus()
        inputValue.current.value = todo.text;
        setId(todo.id)
    }
    return (
        <>
            <p><strong>Task: </strong>{todo.text}</p>
            <label>Is Completed:
                <input type="checkbox" value={todo.completed}></input>
            </label><br></br><br></br>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete Todos</button>
            <button onClick={() => handleEdit(todo)}>Edit Todos</button>
        </>

    )
}

export default Todo
