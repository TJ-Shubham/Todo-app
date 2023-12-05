import { createContext, useContext, useEffect, useState } from "react"

const ThemeConetxt = createContext();

function ThemeProvider({children}){

    const [themeMode, setThemeMode] = useState("dark");

    function lightTheme(){
        setThemeMode("light");
    }

    function darkTheme(){
        setThemeMode("dark");
    }

    useEffect(() => {
      
        document.querySelector("html").classList.remove("dark", "light");
        document.querySelector("html").classList.add(themeMode);
      
    }, [themeMode])
    
    return(
        <ThemeConetxt.Provider value={{themeMode, lightTheme, darkTheme}}>
            {children}
        </ThemeConetxt.Provider>
    )
}

function useTheme(){
    const context = useContext(ThemeConetxt);
    if(context === undefined) throw new Error("ThemeContext was used outside of the ThemeProvider")
    return context;
}

export {ThemeProvider, useTheme};