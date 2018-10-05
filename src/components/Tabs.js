import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, FormGroup, Label, Button, Input } from 'reactstrap';
import classnames from 'classnames';
import SubmittedForm from './SubmittedForm';
import PersonalData from './tabs/PersonalData';
import Event from './tabs/Event';
import Buttons from './Buttons';
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
			eventName: '',
			eventPlace: '',
			departureDate: '',
			arrivalDate: '',
			checkBox: false,
			numberOfPeople: '1',
			message: ''
		};
		
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this);
  }

	//teste de checkbox
	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
	}
	
	//date picker
	onChangeDepartureDate = departureDate => this.setState({ departureDate })
	onChangeArrivalDate = arrivalDate => this.setState({ arrivalDate })

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	async handleSubmit(e) {
		e.preventDefault()
		
		let {name, email, phone, city, departureDate, arrivalDate, eventName, eventPlace, numberOfPeople, message} = this.state
		
		if(this.state.departureDate == undefined){
			departureDate = departureDate.toLocaleDateString()
		}
		if(this.state.arrivalDate == undefined){
			arrivalDate = arrivalDate.toLocaleDateString()
		}

		const form = await axios.post('/api/form', {
			name,
			email,
			phone,
			city,
			departureDate,
			arrivalDate,
			eventName,
			eventPlace,
			numberOfPeople,
			message
		})

		//encaminhar para tela de formulario enviado
		// onClick={() => { this.toggle('5') }}
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
              Passagem
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
        
        <TabContent className="content-padding" activeTab={this.state.activeTab}>
          
					<TabPane tabId="1">
						<PersonalData onChange={this.handleChange} />
						<div className="row-buttons">
							<Button className="submit-button" onClick={this.handleSubmit}>Solicitar Orçamento</Button>
							<Button className="next-tab-button" onClick={() => { this.toggle('2'); }}>Avançar</Button>
						</div>
          </TabPane>

          <TabPane tabId="2">
						<Event onChange={this.handleChange} />
						<div className="row-buttons">
							<Button className="submit-button" onClick={this.handleSubmit}>Solicitar Orçamento</Button>
							<Button className="next-tab-button" onClick={() => { this.toggle('3'); }}>Avançar</Button>
						</div>
          </TabPane>

					<TabPane tabId="3">

						<FormGroup className="form-group-container">
						<Label className="bold" for="departureDate">Data de partida</Label>
							<DatePicker
								className="date-picker"
								onChange={this.onChangeDepartureDate}
								value={this.state.departureDate} />
						</FormGroup>

						<FormGroup className="form-group-container">
							<Label className="bold" for="arrivalDate">Data de chegada</Label>
								<DatePicker
									className="date-picker"
									onChange={this.onChangeArrivalDate}
									value={this.state.arrivalDate} />
						</FormGroup>

						<FormGroup className="form-group-container">
							<Label className="bold" for="numberOfPeople">Número de Pessoas</Label>
							<Input type="select" name="numberOfPeople" id="numberOfPeople" onChange={this.handleChange}>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</Input>
						</FormGroup>


						<FormGroup className="form-group-container">
							<Label className="bold" for="message">Mensagem</Label>
							<Input
								type="textarea"
								name="message"
								onChange={this.handleChange} />
						</FormGroup>

						<div className="row-buttons">
							<Button className="submit-button" onClick={this.handleSubmit}>Solicitar Orçamento</Button>
							<Button className="next-tab-button" onClick={() => { this.toggle('4'); }}>Avançar</Button>
						</div>
          </TabPane>

					<TabPane tabId="4">
						

						<div className="row-buttons">
							<Button className="submit-button" onClick={this.handleSubmit}>Solicitar Orçamento</Button>
							<Button className="next-tab-button" onClick={() => { this.toggle('5'); }}>Avançar</Button>
						</div>
          </TabPane>

          <TabPane tabId="5">
						<FormGroup check>
							<Label check>
								<Input 
									type="checkbox" 
									name="checkBox"
									checked={this.state.checkBox}
            			onChange={this.handleInputChange} />{' '}
								Check me out
							</Label>
						</FormGroup>

						<div className="row-buttons">
							<Button className="submit-button" onClick={this.handleSubmit}>Solicitar Orçamento</Button>
						</div>
          </TabPane>

					<TabPane tabId="6">
						<SubmittedForm />
          </TabPane>
					

        </TabContent>
      </div>
    );
  }
}