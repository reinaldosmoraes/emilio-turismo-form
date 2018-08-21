import React, { Component } from 'react';
import '../App.css';

class Menu extends Component {
  render() {
    return (
			<div className="menu">
				<div className="menu-item">
          Pacote em Grupo
        </div>

        <div className="menu-item">
          Pacote Individual
        </div>
			</div>
    );
  }
}

export default Menu;
