import React, { useEffect, useState } from 'react';

const useLocalStorageState = (key, defaultValue = []) => {
    const [state, setState] = useState(() =>
        window.localStorage.getItem(key)
            ? JSON.parse(window.localStorage.getItem(key))
            : defaultValue
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
};

export default useLocalStorageState;
