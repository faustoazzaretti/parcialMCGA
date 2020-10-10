import './styles.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Buttons = (props) => {
    return(
        <div className="containerButtons">
           {
               props.status ? 
                <>
                <button onClick = {props.onClick}>
                {props.b1}
                </button>
                <button>
                <Link to="/listCounts">Agregar Contador</Link>
                </button>
                </> : <>
                <button onClick = {props.onClick}>{props.b1}
                </button>
                <button>
                <Link to="/listCounts">Agregar Contador</Link>
                </button> 
                </>
           }
        </div>
    )
}
    
export default Buttons;