import { useDispatch, useSelector } from "react-redux"
import { addTodo, editTodo } from "../features/slices/todoSlice";
import Todo from "./Todo";
import { useRef, useState } from "react";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const inputValue = useRef('');
    const [id, setId] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue.current.value = e.target.inputValue.value;
        if (id) {
            dispatch(editTodo({
                id: id,
                text: inputValue.current.value
            }))
            setId('');
        } else {
            dispatch(addTodo({
                text: inputValue.current.value,
                completed: false
            }));
        }
        e.target.inputValue.value = ''
        inputValue.current.value = ''
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input ref={inputValue} type="text" name="inputValue"
                />
            </form>
            <h1>Todos</h1>
            {
                todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} inputValue={inputValue} setId={setId} />
                ))
            }
        </>
    )
}

export default TodoList
