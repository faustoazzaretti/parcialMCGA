import React from 'react';
import Home from './screens/Home/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state= {name:"Liwel",year:2021};

  render() {
    return(
      <Home 
        name={this.state.name}
        year={this.state.year}
      />
    )
  }
}

export default App;
