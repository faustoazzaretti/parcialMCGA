import './styles.css';
import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        var d = new Date();
        this.state = {
            count: 1,
            newDate: d.toLocaleString()
        };
    }

    decrement =() => {
        console.log('decccc')
        let newValue = this.state.count;
        this.setState({
            count: (newValue - 1),
            newDate : this.state.newDate
        });
    }

    increment = () => {
        let newValue = this.state.count;
        this.setState({
            count: (newValue + 1),
            newDate : this.state.newDate
        });
    }

    render() {
        return (
            <div className="containerCount" >
                Contador Nro: {this.props.id}
                <p>Creado: {this.props.date}</p>
                <p>Actualizado: {this.state.newDate}</p>
                <div className="buttonsCount">
                    <button onClick={this.decrement}>-</button>
                    <p>{this.state.count}</p>
                    <button onClick={this.increment}>+</button>
                </div>
                <button onClick={this.props.delete}>Eliminar</button>
            </div> 
        )       
    }
}

export default Count;