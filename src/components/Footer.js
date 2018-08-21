import React, { Component } from 'react';
import '../App.css';

class Menu extends Component {
  render() {
    return (
        <div className="footer">
            <p className="footer-items-bold">Emílio Turismo</p>
            <p className="footer-items">Rua Rangel Pestana, 29 - Centro</p>
            <p className="footer-items">Nova Iguaçu, RJ, CEP: 26255-200</p>
            <p className="footer-items"> Tel.: (21) 38513146</p>
            <p className="footer-items">E-mail: contato@emilioturismo.com.br</p>
        </div>
    );
  }
}

export default Menu;
