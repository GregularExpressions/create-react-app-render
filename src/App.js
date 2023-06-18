import React, { Component } from 'react';
import './App.css';

// Button functions:
function sayHello() {
  alert('You clicked me!');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello from Render!
          </p>
        </header>
        <body>
          <button onClick={sayHello}>Say Hello!</button>
        </body>
      </div>
    );
  }
}

export default App;
