import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

 

function ThemeContextProvider(props) {

    const [theme,setTheme] = useState({
        dark:{  syntax:'#ddd', ui: '#333', bg: '#555' },
        light:{  syntax:'#555', ui: '#ddd', bg: '#333' },
        isLightTheme:true,
    })

    const setLight = () =>{
        setTheme({
            dark:{  syntax:'#ddd', ui: '#333', bg: '#555' },
            light:{  syntax:'#555', ui: '#ddd', bg: '#333' },
            isLightTheme: true,
        })
    }

    const setDark = () =>{
        setTheme({
            dark:{  syntax:'#ddd', ui: '#333', bg: '#555' },
            light:{  syntax:'#555', ui: '#ddd', bg: '#333' },
            isLightTheme: false,
        })
    }


    return (
        <ThemeContext.Provider value={{theme , setLight, setDark}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider


