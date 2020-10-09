import './styles.css';
import React from 'react';
import Buttons from '../Buttons/index';

class Edit extends React.Component {
    constructor(props) {
        super(props)
      }

      state = {
          name:this.props.name,
          year:this.props.year,
          status:false
      }
      
    setValues = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    saveValues = () => {
        this.setState({
            name: this.state.name,
            year: this.state.year,
            status: this.state.status ? false : true
          });
          {console.log('Save Values:',this.state)}
    }

    render() {
        return(
            <div className="containerHome">
            <div className="card">
                <div className="inputsCard">
                    <form>
                        <input 
                        type="text" 
                        name="name" 
                        defaultValue={this.props.name}
                        onChange={ e => this.setState({
                            name: e.target.value
                        })}
                        />
                        <input 
                        type="text" 
                        name="year"
                        defaultValue={this.props.year} 
                        onChange={ e => this.setState({
                            year: e.target.value 
                        })}
                        />
                    </form>
                </div>
                <Buttons
                    b1={'Guardar Informacion'}
                    b2={'Agregar Contador'}
                    name={this.name}
                    year={this.year}
                    status={this.status}
                    onClick={this.saveValues}
                />
            </div>
            {console.log(this.state.status)}
        </div>
        )
    }
}

export default Edit;