import './styles.css';
import React from 'react';
import Buttons from '../Buttons/index';

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            year: this.props.year
        }
    }
    
    render() {
        return(
            <div className="containerHome">
                <div className="card">
                    <div className="inputsCard">
                        <form>
                            <input type="text" name="name" defaultValue={this.state.name} />
                            <input type="text" name="year" defaultValue={this.state.year} />
                        </form>
                    </div>
                    <Buttons
                        b1={'Guardar Informacion'}
                        b2={'Agregar Contador'}
                    />
                </div>
             </div>
        )
    }
}

export default Edit;