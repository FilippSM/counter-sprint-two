import { useState } from "react";
import styles from './styles.module.css';
import { Tablo } from "../../component/Tablo";
import { Button } from "../../component/Button";
import { SetCounter } from "../setCounter/SetCounter";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useAppSelector } from "../../hook/useAppSelector";
import { selectMessage } from "../../model/message-selectors";
import { changeCountAC } from "../../model/count-reducer";
import { selectCount } from "../../model/count-selectors";
import { selectValues } from "../../model/setValues-selectors";

export const Counter = () => {
    const dispath = useAppDispatch();

    const message = useAppSelector(selectMessage);
    const count = useAppSelector(selectCount);
    const values = useAppSelector(selectValues);

    const [isSetCounterVisible, setIsSetCounterVisible] = useState(true);

    const setCount = (value: number) => {
        dispath(changeCountAC({ count: value }))
    }

    const increment = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(values.minValue);
    };

    const toggleVisibility = () => {
        setIsSetCounterVisible(prev => !prev);
    };

    return (
        <div>
            {isSetCounterVisible ? (
                <div className={styles.box}>
                    <div className={styles.tablo}>
                        <Tablo currentCount={count} maxCount={values.maxValue} message={message} />
                    </div>
                    <div className={styles.button_container}>
                        <Button callBack={increment} name={"inc"} disabled={count >= values.maxValue || message === "Incorrect value"} />
                        <Button callBack={reset} name={"res"} disabled={count === values.minValue} />
                        <Button callBack={toggleVisibility} name={"set"} />
                    </div>
                </div>

            ) : (
                <SetCounter toggleVisibility={toggleVisibility} />
            )}

        </div>
    )
}

