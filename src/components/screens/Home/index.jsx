import './styles.css';
import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div className="containerHome">
                <div className="card">
                    <div className="student">
                        <p>Alumno</p>
                        <p>Fausto Azzaretti</p>
                        <p>2020</p>
                    </div>
                    <div className="buttons">
                        <button>Editar Informacion</button>
                        <button>Contador</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;