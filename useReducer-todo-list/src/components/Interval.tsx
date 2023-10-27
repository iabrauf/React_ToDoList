import { useEffect, useState, useRef } from "react";
const Interval = () => {

    const [counter, setCounter] = useState<number>(null!);

    const repeatingInterval = useRef<number | undefined>();


    useEffect(() => {

        console.log('useEffect', counter, repeatingInterval.current);


        if (!counter) {
            repeatingInterval.current = 0;
        }
        if (!!counter && !repeatingInterval.current) {

            repeatingInterval.current = setInterval(() => {
                setCounter((counter) => (counter - 1));
            }, 1000);
        }

        return () => {
            console.log('clear Interval');
            if (counter <= 1 && repeatingInterval.current) {
                clearInterval(repeatingInterval.current);
                console.log('loop clear Interval', counter, repeatingInterval.current);
            }
        };
    }, [counter, repeatingInterval]);


    const handleClick = (event: any) => {
        event.preventDefault();

        if (!!counter) {
            clearInterval(repeatingInterval.current);
            repeatingInterval.current = 0;
            setCounter(null!)
            return
        }

        setCounter(event.target?.counter.value)
        event.target.counter.value = '';

    };

    const buttonText = !!counter ? "Stop" : "Start"

    return (
        <form onSubmit={(e) => handleClick(e)}>
            <input type="text" name="counter" />
            <button type="submit" >
                {buttonText}
            </button>
            <h1>{counter || ''}</h1>
        </form>
    );
}

export default Interval
