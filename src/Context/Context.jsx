import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DarkContext = createContext();

export function DarkContextProvider({children}){
    const [dark, setDark] = useState(true);

    const handleDark = useCallback(()=>setDark(!dark));

    return (
        <DarkContext.Provider value={{dark, handleDark}}>
            {children}
        </DarkContext.Provider>
    )
}