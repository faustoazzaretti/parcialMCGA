import './styles.css';
import React from 'react';
import Card from '../Card/index';
import Buttons from '../Buttons/index';

class Home extends React.Component {
    
    render() {
        return (
            <div className="containerHome">
                <div className="card">
                    <Card
                        name={this.props.name}
                        year={this.props.year}
                        status={this.props.status}
                    />
                    <Buttons
                        b1={'Editar Informacion'}
                        b2={'Agregar Contador'}
                        name={this.props.name}
                        year={this.props.year}
                        status={this.props.status}
                        onClick={this.props.onClick}
                    />
                </div>
            </div>
        )
    }
}

export default Home;