import './styles.css';
import React from 'react';

class Count extends React.Component {
    render() {
        return(
            <div className="containerCount">
                Contador Nro: {this.props.id}
                <p>Creado: {this.props.date}</p>
                <p>Actualizado: 10/10/2020</p>
                <div className="buttonsCount">
                    <button>-</button>
                    <p>14</p>
                    <button>+</button>
                    <button onClick={this.props.delete}>Eliminar</button>
                </div>
            </div>
        )
    }
}

export default Count;