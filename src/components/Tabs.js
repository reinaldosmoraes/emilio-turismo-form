import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import classnames from 'classnames';
import TravelForm from './TravelForm';
import Content from './Content';
import SubmittedForm from './SubmittedForm';
import PersonalData from './PersonalData';
import Events from './Events';
import axios from 'axios';
import DatePicker from 'react-date-picker';

import '../App.css';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
		
		this.state = {
			activeTab: '1',
			name: '',
			email: '',
			phone: '',
			city: '',
			departureDate: '',
			arrivalDate: '',
			eventName: '',
			numberOfPeople: '1',
			message: ''
		};
		
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
  }

	//date picker
	onChangeDepartureDate = departureDate => this.setState({ departureDate })
	onChangeArrivalDate = arrivalDate => this.setState({ arrivalDate })

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	async handleSubmit(e) {
		e.preventDefault()

		//setando a variavel que muda o conteudo para a tela de SubmittedForm
		//this.state.onClick()
		
		let {name, email, phone, city, departureDate, arrivalDate, eventName, numberOfPeople, message} = this.state
		departureDate = departureDate.toLocaleDateString()
		arrivalDate = arrivalDate.toLocaleDateString()

		const form = await axios.post('/api/form', {
			name,
			email,
			phone,
			city,
			departureDate,
			arrivalDate,
			eventName,
			numberOfPeople,
			message
		})

	}


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} >
              Dados Pessoais
            </NavLink>
          </NavItem>
          
					<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }} >
              Evento
            </NavLink>
          </NavItem>
					
					<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }} >
              Passsagem
            </NavLink>
          </NavItem>

					<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }} >
              Hotel
            </NavLink>
          </NavItem>

					<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }} >
              Opcionais
            </NavLink>
          </NavItem>
        </Nav>
        
        <TabContent activeTab={this.state.activeTab}>
          
					<TabPane tabId="1">
						<PersonalData onChange={this.handleChange} />
          </TabPane>

          <TabPane tabId="2">
						<Events onChange={this.handleChange} />
          </TabPane>

					<TabPane tabId="3">
						
          </TabPane>

					<TabPane tabId="4">
						<FormGroup className="form-group-container">
						<Label className="label-container" for="departureDate">Data de partida</Label>
							<DatePicker
								className="date-picker"
								onChange={this.onChangeDepartureDate}
								value={this.state.departureDate} />
						</FormGroup>

						<FormGroup className="form-group-container">
							<Label className="label-container" for="arrivalDate">Data de chegada</Label>
								<DatePicker
									className="date-picker"
									onChange={this.onChangeArrivalDate}
									value={this.state.arrivalDate} />
						</FormGroup>
          </TabPane>

          <TabPane tabId="5">
            <SubmittedForm />
          </TabPane>

        </TabContent>
      </div>
    );
  }
}