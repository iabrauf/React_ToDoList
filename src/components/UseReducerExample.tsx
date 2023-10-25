import { useReducer } from "react"

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    CHANGE_COUNT: "change-count",
    RESET: "reset"
}
interface payloadInterface {
    amount: number
}
interface actionInterface {
    type: string,
    payload?: payloadInterface
}
const reducer = (count: number, action: actionInterface) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return count + 1;
        case ACTIONS.DECREMENT:
            return count - 1;
        case ACTIONS.RESET:
            return 0;
        case ACTIONS.CHANGE_COUNT:
            return count + (action.payload?.amount ?? 0); // Use the nullish coalescing operator to provide a default value of 0 if 'amount' is undefined
        default:
            return count
    }

}
const useReducerExample = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
            <button onClick={() => dispatch({
                type: ACTIONS.CHANGE_COUNT,
                payload: { amount: 5 },
            })}>add 5</button>
        </div>
    )
}

export default useReducerExample
