import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import FiosForm from './components/fiosForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <FiosForm />
      </div>
    );
  }
}

export default App;
