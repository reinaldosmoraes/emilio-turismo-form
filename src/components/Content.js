import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import DatePicker from 'react-date-picker';

import '../App.css';

class Content extends Component {

	constructor() {
		super()

		this.state = {
			name: '',
			email: '',
			message: '',
			departureDate: new Date()
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	//date picker
	onChange = date => this.setState({ date })

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	async handleSubmit(e) {
		e.preventDefault()

		const {name, email, departureDate, message} = this.state

		const form = await axios.post('/api/form', {
			name,
			email,
			departureDate,
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
							onChange={this.onChange}
							value={this.state.date} />
					
				</FormGroup>

				<FormGroup>
					<Label for="arrivalDate">Data de chegada</Label>
					<p>
						<DatePicker
							onChange={this.onChange}
							value={this.state.date} />
					</p>
				</FormGroup>

				<FormGroup className="form-group-container">
					<Label className="label-container" for="numberOfPeople">Número de Pessoas</Label>
					<Input type="select" name="numberOfPeople" id="numberOfPeople">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
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
					<Label className="label-button"></Label>
					<Button className="submit-button">Solicitar Orçamento</Button>
				</FormGroup>
				
			</Form>

		</div>
    );
  }
}

export default Content;


