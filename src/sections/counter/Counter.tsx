import { useState } from "react";
import styles from './styles.module.css';
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";
import { SetCounter } from "../setCounter/SetCounter";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useAppSelector } from "../../hook/useAppSelector";
import { selectMessage } from "../../model/message-selectors";

type CounterType = {
    minValue: number
    maxValue: number
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
/*     message: string | number */
    getNumbers: (maxValue: number, minValue: number) => void
}


export const Counter = (props: CounterType) => {
    const dispath = useAppDispatch();

    const message = useAppSelector(selectMessage);

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
                        <Tablo currentCount={props.count} maxCount={props.maxValue} message={message} />
                    </div>
                    <div className={styles.button_container}>
                        <Button callBack={increment} name={"inc"} disabled={props.count >= props.maxValue || message === "Incorrect value"} />
                        <Button callBack={reset} name={"res"} disabled={props.count === props.minValue} />
                        <Button callBack={toggleVisibility} name={"set"} />
                    </div>
                </div>

            ) : (
                <SetCounter getNumbers={props.getNumbers} toggleVisibility={toggleVisibility} />
            )}

        </div>
    )
}

