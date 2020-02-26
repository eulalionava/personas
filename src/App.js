import React,{Component} from 'react';
import { Route,Router } from 'react-router';
import PropTypes from 'prop-types';
import './App.css';

import Home from './views/Home';
import UserDetail from './views/UserDetail';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router history={this.props.history}>
          <Route exact path="/" component={ Home } />
          <Route path="/detail/:userId" component={ UserDetail } />
        </Router>
      </div>
    );

  }
}

App.propTypes = {
  history:PropTypes.any.isRequired
}

export default App;
