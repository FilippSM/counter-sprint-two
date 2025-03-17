import { useEffect, useState } from 'react';
import { Counter } from './sections/counter/Counter';


function App() {
  const maxStartValue = 5;
  const minStartValue = 0;

  const [maxValue, setMaxValue] = useState<number>(maxStartValue);
  const [minValue, setMinValue] = useState<number>(minStartValue);
 /*  const [maxValue, setMaxValue] = useState<number>(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    return savedMaxValue !== null ? JSON.parse(savedMaxValue) : maxStartValue;
  });

  const [minValue, setMinValue] = useState<number>(() => {
    const savedMinValue = localStorage.getItem('minValue');
    return savedMinValue !== null ? JSON.parse(savedMinValue) : minStartValue;
  }); */

  const [count, setCount] = useState(minValue);
  
/*   useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('minValue', JSON.stringify(minValue));
  }, [maxValue, minValue]); */

  const getNumbers = (maxValue: number, minValue: number) => {
    setMaxValue(maxValue);
    setMinValue(minValue);
    setCount(minValue);
  }

  const [message, setMessage] = useState<string | number>(minValue); 
  return (
    <div style={{ display: 'flex' }}>

      <Counter 
        maxValue={maxValue} 
        minValue={minValue}  
        count={count} 
        setCount={setCount} 
        message={message}
        getNumbers={getNumbers}
        setMessage={setMessage}
      />
    </div>
  );
}

export default App;