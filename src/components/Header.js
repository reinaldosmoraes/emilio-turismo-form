import React, { Component } from 'react';
import logo_emilio_turismo from '../images/logo_emilio_turismo.png';
import '../App.css';
import SocialMedia from './SocialMedia';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img src={logo_emilio_turismo} className="logo" alt="logo" />
        </div>
        <SocialMedia />
      </div>
    );
  }
}

export default Header;
