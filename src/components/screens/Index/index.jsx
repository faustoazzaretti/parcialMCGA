import React from 'react';
import Home from '../Home/index';
import Edit from '../Edit/index';
import swal from 'sweetalert';

class Index extends React.Component {
    constructor(props) {
        super(props)
        var d = new Date();
        this.state = {
            name: "Fausto Azzaretti",
            year: "1995",
            status: true
        };
    }

    changeScreen = () => {
        this.setState({
            status: this.state.status ? false : true
        });
    }

    saveValues = () => {
        //Validation
        this.state.name === "" || this.state.year === "" ? 
        swal ( "Error" ,  "El nombre no debe estar vacio!" ,  "error" ) :
        this.setState({
            name: this.state.name,
            year: this.state.year,
            status: this.state.status ? false : true
        });
        { console.log('Save Values:', this.state) }
    }

    setName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    setYear = (e) => {
        this.setState({
            year: e.target.value,
        })
    }

    render() {
        return (
            <>
                { this.state.status ? 
                    <Home
                        name={this.state.name}
                        year={this.state.year}
                        status={this.state.status}
                        onClick={this.changeScreen}
                /> : 
                    <Edit
                        name={this.state.name}
                        year={this.state.year}
                        status={this.state.status}
                        saveValue={this.saveValues}
                        setName={this.setName}
                        setYear={this.setYear}
                        validate={this.validate}
                    />
                }
            </>
        )
    }
}

export default Index;