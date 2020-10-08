import './styles.css';
import React from 'react';
import Card from '../Card/index';

const Home = (props) => (
    <div className="containerHome">
        <div className="card">
            <Card 
                name={props.name}
                year={props.year}
            />
            <div className="buttons">
                <button>Editar Informacion</button>
                <button>Contador</button>
            </div>
        </div>
    </div>
)

export default Home;