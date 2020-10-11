import './styles.css';
import React from 'react';

class Count extends React.Component {
    render() {
        return (
            <div className="containerCount" >
                Contador Nro: {this.props.id}
                <p>Creado: {this.props.date}</p>
                <p>Actualizado: {this.props.newDate}</p>
                <div className="buttonsCount">
                    <button onClick={this.props.decrement}>-</button>
                    <p>{this.props.number}</p>
                    <button onClick={this.props.incretmen}>+</button>
                </div>
                <button onClick={this.props.delete}>Eliminar</button>
            </div >
        )
    }
}

export default Count;