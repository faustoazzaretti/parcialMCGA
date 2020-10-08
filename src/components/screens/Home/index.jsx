import './styles.css';
import React from 'react';
import Card from '../Card/index';
import Buttons from '../Buttons/index';

const Home = (props) => (
    <div className="containerHome">
        <div className="card">
            <Card 
                name={props.name}
                year={props.year}
            /> 
            <Buttons
                b1={'Editar Informacion'}
                b2={'Agregar Contador'}
            />
        </div>
    </div>
)

export default Home;