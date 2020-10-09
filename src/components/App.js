import React from 'react';
import Home from './screens/Home/index';
import Edit from './screens/Edit/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state= {name:"Suki",year:"2020"};

  
  render() {
    return(
      <>
      <Home 
        name={this.state.name}
        year={this.state.year}
      />
      <Edit 
        name={this.state.name}
        year={this.state.year}
      />
      </>
    )
  }
}

export default App;
