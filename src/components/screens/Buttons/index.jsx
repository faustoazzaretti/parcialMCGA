import './styles.css';
import React from 'react';


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
                {props.b2}
                </button>
                </> : <>
                <button onClick = {props.onClick}>{props.b1}
                </button>
                <button>{props.b2}
                </button> 
                </>
           }
        </div>
    )
}
    
export default Buttons;