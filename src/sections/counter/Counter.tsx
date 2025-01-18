import { useState } from "react";
import styles from './styles.module.css';
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";
import { SetCounter } from "../setCounter/SetCounter";

type CounterType = {
    minValue: number
    maxValue: number
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    message: string | number
    getNumbers: (maxValue: number, minValue: number) => void
    setMessage: React.Dispatch<React.SetStateAction<string | number>>

}


export const Counter = (props: CounterType) => {

    const [isSetCounterVisible, setIsSetCounterVisible] = useState(true);

    const increment = () => {
        props.setCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        props.setCount(props.minValue);
    };

    const toggleVisibility = () => {
        setIsSetCounterVisible(prev => !prev);
    };

    return (
        <div>
            {isSetCounterVisible ? (
                <div className={styles.box}>
                    <div className={styles.tablo}>
                        <Tablo currentCount={props.count} maxCount={props.maxValue} message={props.message} />
                    </div>
                    <div className={styles.button_container}>
                        <Button callBack={increment} name={"inc"} disabled={props.count >= props.maxValue || props.message === "Incorrect value"} />
                        <Button callBack={reset} name={"res"} disabled={props.count === props.minValue} />
                        <Button callBack={toggleVisibility} name={"set"} />
                    </div>
                </div>

            ) : (
                <SetCounter getNumbers={props.getNumbers} setMessage={props.setMessage} message={props.message} toggleVisibility={toggleVisibility} />
            )}

        </div>
    )
}

