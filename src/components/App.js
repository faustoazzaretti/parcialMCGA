import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Index from './screens/Index/index';
import ListCounts from './screens/ListCounts/index';
import Edit from './screens/Edit';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      year: props.year
    }
  }

  render() {
    return (
      <>
        <Router>
          <Redirect to="/" component={Index} />
          <Route path="/" exact component={Index} />
          <Route path="/listCounts"><ListCounts name={this.props.name} /></Route>
          {/* <Route path="/listCounts" exact component={ListCounts} /> */}
        </Router>
      </>)
  }
}

export default App;