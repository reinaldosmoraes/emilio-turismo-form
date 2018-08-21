import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import DecolarForm from './components/DecolarForm'
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />

        <DecolarForm />

        <Footer />
      </div>
    );
  }
}

export default App;
