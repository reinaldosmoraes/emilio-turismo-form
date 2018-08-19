import React, { Component } from 'react';
import logo_emilio_turismo from '../images/logo_emilio_turismo.png';
import '../App.css';

class Header extends Component {
  render() {
    return (
			<div className="header">
				<img src={logo_emilio_turismo} className="logo" alt="logo" />
			</div>
    );
  }
}

export default Header;
