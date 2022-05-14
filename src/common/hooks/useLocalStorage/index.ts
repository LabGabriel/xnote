import React, { SetStateAction, useEffect, useState } from "react"

const useLocalStorage = <T>(key: string, initialState: any): [T, React.Dispatch<SetStateAction<T>>] => {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key);
        if (storage) {
            return JSON.parse(storage);
        } else {
            return JSON.parse(initialState!);
        }
    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default useLocalStorage;