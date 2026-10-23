import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null)


const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider