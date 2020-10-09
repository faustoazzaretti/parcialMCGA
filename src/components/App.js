import React from 'react';
import Home from './screens/Home/index';
import Edit from './screens/Edit/index';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state= {
        name:"Fausto",
        year:"1995",
        status:true,
      };
    }

    changeScreen = () => {
        this.setState({
            status: this.state.status ? false : true
          });
        // this.setState({
        //     status: false
        //   });
    }

   
    

    render() {
        return(
        <>
        { this.state.status ? <Home 
            name={this.state.name}
            year={this.state.year}
            status={this.state.status}
            onClick = {this.changeScreen}
            
        /> : <Edit 
            name={this.state.name}
            year={this.state.year}
            status={this.state.status}
        />}
        </>
        )
    }
}

export default App;
