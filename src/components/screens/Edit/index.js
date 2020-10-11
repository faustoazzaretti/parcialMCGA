import './styles.css';
import React from 'react';
import Buttons from '../Buttons/index';

class Edit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="containerHome">
                    <div className="card">
                        <div className="inputsCard">
                            <form>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={this.props.name}
                                    onChange={this.props.setName}
                                />
                                <input
                                    type="text"
                                    name="year"
                                    defaultValue={this.props.year}
                                    onChange={this.props.setYear}
                                />
                            </form>
                        </div>
                        <Buttons
                            b1={'Guardar Informacion'}
                            b2={'Agregar Contador'}
                            name={this.name}
                            year={this.year}
                            status={this.status}
                            onClick={this.props.saveValue}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Edit;