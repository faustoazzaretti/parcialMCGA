import './styles.css';
import React from 'react';

const Card = (props) => (
    <>
    <div className="containerCard">
        <p>Alumno</p>
        <p>{props.name}</p>
        <p>{props.year}</p>
    </div>
    </>
)

export default Card;