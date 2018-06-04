import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Menu />
        </div>
      </Provider>
    );
  }
}

export default App;
