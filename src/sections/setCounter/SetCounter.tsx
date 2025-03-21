import { useEffect, useState } from "react";
import styles from './styles.module.css';
import { Button } from "../../component/Button";
import { changeCountMaxAC, changeCountMinAC } from "../../model/setCounter-reducer";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useAppSelector } from "../../hook/useAppSelector";
import { selectSetCounter } from "../../model/setCounter-selectors";
import { selectMessage } from "../../model/message-selectors";
import { changeMessageAC, TypeMessage } from "../../model/message-reducer";

type SetCounterType = {
    getNumbers: (maxValue: number, minValue: number) => void;
    toggleVisibility: () => void
};

export const SetCounter = (props: SetCounterType) => {
/*     const maxValueStart = 0; // Начальное значение
    const minValueStart = 0; // Начальное значение */

   /*  const [countMax, setCountMax] = useState<number>(maxValue);
    const [countMin, setCountMin] = useState<number>(minValue); */

/*     const [countMax, setCountMax] = useState<number>(maxValueStart);

    const [countMin, setCountMin] = useState<number>(minValueStart); */

  /*   const [countMax, setCountMax] = useState<number>(() => {
        const valueAsString = localStorage.getItem('maxValue');
        return valueAsString ? JSON.parse(valueAsString) : maxValueStart;
    });

    const [countMin, setCountMin] = useState<number>(() => {
        const valueAsString = localStorage.getItem('minValue');
        return valueAsString ? JSON.parse(valueAsString) : minValueStart;
    });

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(countMax))
    }, [countMax])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(countMin))
    }, [countMin]) */

    const dispath = useAppDispatch();

    const setCount = useAppSelector(selectSetCounter);
    let countMax = setCount.countMax
    let countMin = setCount.countMin

    const setCountMax = (value: number) => {
        dispath(changeCountMaxAC({ countMax: value }))
    }
    const setCountMin = (value: number) => {
        dispath(changeCountMinAC({ countMin: value }))
    }

    const setMessage = (message: TypeMessage) => {
        dispath(changeMessageAC({ message }))
    }

    // Обновляем сообщение при изменении значений
    const handleMaxChange = (value: number) => {
        setCountMax(value);
        setMessage(value < 0 || value <= countMin ? "Incorrect value" : "Enter values and press set");
    };

    const handleMinChange = (value: number) => {
        setCountMin(value);
        setMessage(value < 0 || value >= countMax ? "Incorrect value" : "Enter values and press set");
    };


    
    const setNumbers = () => {
        props.getNumbers(countMax, countMin);
        setMessage(countMin); // Устанавливаем сообщение на текущее значение countMin при нажатии
    };

    return (
        <div className={styles.box}>
            <label>
                <span>max value: </span>
                <input 
                    type="number" 
                    value={countMax} 
                    onChange={e => handleMaxChange(Number(e.currentTarget.value))}
                />
            </label>
            <label>
                <span>start value: </span>
                <input 
                    type="number" 
                    value={countMin} 
                    onChange={e => handleMinChange(Number(e.currentTarget.value))}
                />
            </label>
            <div className={styles.button_container}>
                <Button callBack={setNumbers} callBackTwo={props.toggleVisibility} name={"set"} disabled={countMax < 0 || countMax <= countMin || countMin < 0 || countMax === countMin}/>
            </div>
            {/* для проверки значений */}
            {/* <div>max value: {countMax}</div>
            <div>start value: {countMin}</div>
            <div>{props.message}</div>  */}{/* //Отображаем текущее сообщение  */}
        </div>
    );
}

