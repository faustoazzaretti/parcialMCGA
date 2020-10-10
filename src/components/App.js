import React from 'react';
import Home from './screens/Home/index';
import Edit from './screens/Edit/index';
import ListCount from './screens/ListCounts/index';

class App extends React.Component {
    constructor(props) {
      super(props)
      var d = new Date();

      this.state= {
        name:"Fausto",
        year:"1995",
        status:true,
        date: Date("23 Jun 2017 07:45:00")
      };
    }

    changeScreen = () => {
        this.setState({
            status: this.state.status ? false : true
          });
    }

    saveValues = () => {
      this.setState({
           name: this.state.name,
           year: this.state.year,
           status: this.state.status ? false : true
         });
         {console.log('Save Values:',this.state)}
    }

    setName = (e) => {
      this.setState({
          name: e.target.value,
      })
    }

    setYear= (e) => {
      this.setState({
          year: e.target.value,
      })
    }

    render() {
        return(
        <>
        { this.state.status ? <Home 
            name={this.state.name}
            year={this.state.year}
            status={this.state.status}
            onClick = {this.changeScreen}
            date={this.state.date}
            
            
        /> : <Edit 
            name={this.state.name}
            year={this.state.year}
            status={this.state.status}
            date={this.state.date}
            saveValue={this.saveValues}
            setName={this.setName}
            setYear={this.setYear}
        />}
        </>
        )
    }
}

export default App;