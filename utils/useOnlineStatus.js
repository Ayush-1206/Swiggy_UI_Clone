import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("online", (event) => {
            setIsOnline(true);
        });
    
        window.addEventListener("offline", (event) => {
           setIsOnline(false);
        });
    },[]);

    return isOnline;
}