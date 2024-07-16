import React, { useContext } from "react";
import ThemeContext from "./Context";
import './style.css'

const Tema = () => {

    const { tema, trocaTema } = useContext(ThemeContext)    

    return (
        <div className={`container ${tema}`}>
            <h1>
                Componentes
            </h1>
            <button onClick={trocaTema}>
                Trocar tema
            </button>
        </div>
    );
}

export default Tema;