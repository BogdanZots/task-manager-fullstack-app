import { useRef } from 'react';
import { useCallback } from 'react';

export const useDebounse = (cb, delay) => {
  // создаю хук useDebounse
  const currentRef = useRef(null); // создаю значение по которому буду отслеживать существует ли уже что то в currnet
  const debouncedCb = useCallback(
    (...args) => {
      // в ...args - все параметры функции которую обернули в useDebounce
      if (currentRef.current) {
        // если в сurrentRef есть тайпаут то делаем очистку
        clearTimeout(currentRef.current);
      }
      currentRef.current = setTimeout(() => {
        // сетаем таймаут
        cb(...args);
      }, delay);
    },
    [cb, delay],
  );
  return debouncedCb;
};
