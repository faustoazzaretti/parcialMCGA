import React from 'react';
import Home from './screens/Home/index';
import Edit from './screens/Edit/index';
import ListCounts from './screens/ListCounts/index';

class App extends React.Component {
    constructor(props) {
      super(props)

      var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.state= {
        name:"Fausto",
        year:"1995",
        status:true,
        date: date
      };
    }

    changeScreen = () => {
        this.setState({
            status: this.state.status ? false : true
          });
    }

    render() {
        return(
        <>
        <ListCounts
          date={this.state.date}
        />
        {/* { this.state.status ? <Home 
            name={this.state.name}
            year={this.state.year}
            status={this.state.status}
            onClick = {this.changeScreen}
            
        /> : <Edit 
            name={this.state.name}
            year={this.state.year}
            status={this.state.status}
        />} */}
        </>
        
        )
    }
}

export default App;
