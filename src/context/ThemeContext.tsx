"use client"

import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"

type ThemeContextType = {
    isDarkModeOn: boolean;
    setIsDarkModeOn: React.Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkModeOn, setIsDarkModeOn] = useState(false);

    useEffect(() => {
        const Theme = localStorage.getItem("Theme")
        if (Theme === "dark") {
            setIsDarkModeOn(true);
        } else {
            setIsDarkModeOn(false)
        }
    }, [])

    useEffect(() => {
        if (isDarkModeOn) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light")
            localStorage.setItem("Theme", "dark");
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove("dark")
            localStorage.setItem('Theme', "light");
        }
    }, [isDarkModeOn])

    return (
        <ThemeContext.Provider value={{ isDarkModeOn, setIsDarkModeOn }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeContext);
    
    if(!context){
        throw new Error("Theme context must be use in a theme provider")
    }
    return context
}