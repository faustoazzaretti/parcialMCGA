import React from 'react';
import Home from './screens/Home/index';
import Edit from './screens/Edit/index';

class App extends React.Component {
  state= {
    name:"Suki",
    year:"2020",
    status:true,
    };

  render() {
    return(
      <>
      { this.state.status ? <Home 
        name={this.state.name}
        year={this.state.year}
      /> : <Edit 
        name={this.state.name}
        year={this.state.year}
      />}
      </>
    )
  }
}

export default App;
