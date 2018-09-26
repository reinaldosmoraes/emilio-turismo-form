import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';
import Tabs from './components/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
   

        <Tabs />

        <Footer />
      </div>
    );
  }
}

export default App;
