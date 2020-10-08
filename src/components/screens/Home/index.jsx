import './styles.css';
import React from 'react';

const Home = (props) => (
    <div className="containerHome">
                <div className="card">
                    <div className="student">
                        <p>Alumno</p>
                        <p>{props.name}</p>
                        <p>{props.year}</p>
                    </div>
                    <div className="buttons">
                        <button>Editar Informacion</button>
                        <button>Contador</button>
                    </div>
                </div>
            </div>
)

export default Home;