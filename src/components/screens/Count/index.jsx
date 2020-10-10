import './styles.css';
import React from 'react';

const Count = () => {
    return(
        <div className="containerCount">
            <p>Creado: 10/10/2020</p>
            <p>Actualizado: 10/10/2020</p>
            <div className="buttonsCount">
                <button>-</button>
                <p>14</p>
                <button>+</button>
                <button>Eliminar</button>
            </div>
        </div>
    )
}

export default Count;