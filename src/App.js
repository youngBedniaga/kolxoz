import React, { Component } from 'react';
import Button from 'arui-feather/button';
import Amount from 'arui-feather/amount';
import logo from './logo.svg';
import './App.css';



const AMOUNT = {
    value: 123535,
    currency: {
        code: 'RUR',
        minority: 100
    }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Button>fdfddf</Button>

          <div>
              {['s', 'm', 'l', 'xl'].map(size => (
                  <div key={ size }>
                      <Amount
                          size={ size }
                          amount={ AMOUNT }
                      />
                  </div>
              ))}
          </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
