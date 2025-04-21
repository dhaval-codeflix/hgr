import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, time = 1000): T => {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value);
        }, time);

        return () => {
            clearTimeout(timeout);
        };
    }, [value, time]);

    return debounceValue;
};

export default useDebounce;
