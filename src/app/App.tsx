import { useEffect, useState } from "react";
import { Counter } from "../sections/counter/Counter";

function App() {
  const maxStartValue = 5;
  const minStartValue = 0;

  /*  const [maxValue, setMaxValue] = useState<number>(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    return savedMaxValue !== null ? JSON.parse(savedMaxValue) : maxStartValue;
  });

  const [minValue, setMinValue] = useState<number>(() => {
    const savedMinValue = localStorage.getItem('minValue');
    return savedMinValue !== null ? JSON.parse(savedMinValue) : minStartValue;
  }); */

  /*   useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('minValue', JSON.stringify(minValue));
  }, [maxValue, minValue]); */


/*   const [message, setMessage] = useState<string | number>(minValue); */
  return (
    <div style={{ display: "flex" }}>
      <Counter
      />
    </div>
  );
}

export default App; 
