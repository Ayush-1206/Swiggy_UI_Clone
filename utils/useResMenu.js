import { useState, useEffect} from "react";
import { REST_MENU } from "./config";

export const useResMenu = (resId) =>{
    const [result, setResult] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`${REST_MENU}${resId}`);
        const json = await data.json();
        setResult(json);
        console.log(json.data);
    };

    return result;
}

