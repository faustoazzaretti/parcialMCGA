import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Index from './screens/Index/index';
import ListCounts from './screens/ListCounts/index';

const App = () => (
  <>
    <Router>
        <Redirect to="/" component={Index} />
        <Route path="/" exact component={Index} />
        <Route path="/counters"><ListCounts /></Route>
    </Router>
  </>
)

export default App;