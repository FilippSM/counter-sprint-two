import styles from './styles.module.css'; 

type ButtonPropsType = {
    callBack: () => void;
    callBackTwo?: () => void; // Сделаем callBackTwo необязательным
    name: string;
    disabled?: boolean;
};

export const Button = (props: ButtonPropsType) => {
    const handleClick = () => {
        props.callBack(); // Всегда вызываем первую функцию
        if (props.callBackTwo) { // Проверяем, передана ли вторая функция
            props.callBackTwo(); // Вызываем только если она определена
        }
    };

    return (
        <button
            className={styles.button}
            onClick={handleClick}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    );
}