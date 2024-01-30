import { useEffect, useState } from "react";

export default function useLocalstorage(key, keyLt, initiaValue) {

    const [value, setValue] = useState(initiaValue);
    const [valueLt, setValueLt] = useState(initiaValue);

    // const [value, setValue] = useState(_ => {
    //   console.log('useState', 'key', key, 'initiaValue', initiaValue);
    //   const item = window.localStorage.getItem(key);
    //   return item ? JSON.parse(item) : initiaValue;
    // });



    useEffect(_ => {
        const item = window.localStorage.getItem(key);
        setValue(item ? JSON.parse(item) : initiaValue);
        const itemLt = window.localStorage.getItem(keyLt);
        setValueLt(itemLt ? JSON.parse(itemLt) : initiaValue);
    }, [key, keyLt, initiaValue]);


    useEffect(_ => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    useEffect(_ => {
        window.localStorage.setItem(keyLt, JSON.stringify(valueLt));
    }, [valueLt, keyLt]);


    return [value, setValue, valueLt, setValueLt];
}