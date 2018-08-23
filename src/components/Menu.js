import React, { Component } from 'react';
import '../App.css';

class Menu extends Component {
  render() {
    return (
			<div className="menu">
				<div className="menu-item-selected">
          Orçamento Personalizado
        </div>

        <a href="https://www.e-agencias.com.br/meviagens" className="menu-item">
            Orçamento via Decolar.com
        </a>
        
      </div>
        
    );
  }
}

export default Menu;
