import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import DatePicker from 'react-date-picker';

import '../App.css';

class TravelForm extends Component {

	constructor(props) {
		super()

		this.state = {
			name: '',
			email: '',
			departureDate: '',
			arrivalDate: '',
			eventName: '',
			numberOfPeople: '1',
			message: '',
			onClick: props.onClick
		}

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
		this.state.onClick()
		
		let {name, email, departureDate, arrivalDate, eventName, numberOfPeople, message} = this.state
		departureDate = departureDate.toLocaleDateString()
		arrivalDate = arrivalDate.toLocaleDateString()

		const form = await axios.post('/api/form', {
			name,
			email,
			departureDate,
			arrivalDate,
			eventName,
			numberOfPeople,
			message
		})

	}

  	render() {
    return (
		<div className="content">
			<Form className="form" onSubmit={this.handleSubmit}>
				<FormGroup className="form-group-container">
					<Label className="label-container" for="name">Nome</Label>
					<Input 
						type="text"
						name="name"
						onChange={this.handleChange} />
				</FormGroup>
				
				<FormGroup className="form-group-container">
					<Label className="label-container" for="email">Email</Label>
					<Input 
						type="email"
						name="email"
						onChange={this.handleChange} />
				</FormGroup>

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

				<FormGroup className="form-group-container">
					<Label className="label-container" for="eventName">Nome do Evento</Label>
					<Input 
						type="text"
						name="eventName"
						onChange={this.handleChange} />
				</FormGroup>

				<FormGroup className="form-group-container">
					<Label className="label-container" for="numberOfPeople">Número de Pessoas</Label>
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
					<Label className="label-container" for="message">Mensagem</Label>
					<Input
						type="textarea"
						name="message"
						onChange={this.handleChange} />
				</FormGroup>

				<FormGroup className="form-group-container">
					<Label className="label-container"></Label>
					<button className="submit-button">Solicitar Orçamento</button>
				</FormGroup>
				
			</Form>

		</div>
    );
  }
}

export default TravelForm;
