import './styles.css';
import React from 'react';
import Buttons from '../Buttons/index';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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
                                <FormControl>
                                    <InputLabel htmlFor="component-simple">Nombre:</InputLabel>
                                    <Input 
                                        id="component-simple"  
                                        defaultValue={this.props.name} 
                                        onChange={this.props.setName}
                                    />
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="component-simple">Año:</InputLabel>
                                    <Input
                                        id="component-simple"  
                                        defaultValue={this.props.year}
                                        onChange={this.props.setYear}
                                    />
                                </FormControl>
                            </form>
                        </div>
                        <Buttons
                            b1={'Guardar'}
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