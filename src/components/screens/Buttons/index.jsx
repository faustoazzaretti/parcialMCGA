import './styles.css';
import React from 'react';

const Buttons = (props) => (
    <div className="containerButtons">
        <button>{props.b1}</button>
        <button>{props.b2}</button>
    </div>
)

export default Buttons;