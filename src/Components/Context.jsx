import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [tema, setTema] = useState('claro');

    const trocaTema = () => {
        setTema(tema === 'claro' ? 'escuro' : 'claro');
    }

    return(
        <ThemeContext.Provider value={{ tema, trocaTema }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContext;