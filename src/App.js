import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />

        <Content />
      </div>
    );
  }
}

export default App;
