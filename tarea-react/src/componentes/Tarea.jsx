import React, { useState } from "react";
import Bien from '../assets/bien.png'
import Mal from '../assets/mal.png'
import './Tarea.css'
const Tarea = (tarea) => {
    const [isWordCrossed, setIsWordCrossed] = useState(false);
    const [isContainerVisible, setIsContainerVisible] = useState(true);
    const handleGoodButtonClick = () => {
        setIsWordCrossed(true);
    };
    const handleBadButtonClick = () => {
        setIsContainerVisible(false);
      };
    
      if (!isContainerVisible) {
        return null;
      }
    return (
        <div>
            <div className="container">
            <h1 className={isWordCrossed ? 'crossed' : ''}>{tarea.nombre}</h1>
            <div className="buttons">
                <button className="good-button" onClick={handleGoodButtonClick}>
                <img src={Bien} alt="Botón Bien" />
                </button>
                <button className="bad-button" onClick={handleBadButtonClick}>
                 <img src={Mal} alt="Botón Mal" />
             </button>
            </div>
            </div>
        </div>
    )
}
export default Tarea; 