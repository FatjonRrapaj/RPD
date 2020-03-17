import React, {useState, useEffect} from 'react';

export default function debounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value); //the value will be returned only after the timer will completed
    }, delay);
    return () => {
      clearTimeout(handler); //the timer will be cleared before the component will unmount
    };
  }, [value]);

  return debouncedValue;
}
