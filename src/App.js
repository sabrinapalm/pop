import React, { Component } from 'react';
import Products from './components/Products';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Root from './components/Root';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path={'/'} component={Root}>
            <IndexRoute component={Products}/>
            <Route path={'products'} component={Products}/>
            <Route path={'admin'} component={Admin}/>
            <Route path={'cart'} component={Cart}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
