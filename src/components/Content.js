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
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="name">Nome:</Label>
						<Input 
							type="text"
							name="name"
							onChange={this.handleChange} />
					</FormGroup>
					
					<FormGroup>
						<Label for="email">Email:</Label>
						<Input 
							type="email"
							name="email"
							onChange={this.handleChange} />
					</FormGroup>

					<FormGroup>
						<Label for="departureDate">Data de partida:</Label>
						<p>
							<DatePicker
								onChange={this.onChange}
								value={this.state.date} />
						</p>
					</FormGroup>

					<FormGroup>
						<Label for="arrivalDate">Data de chegada:</Label>
						<p>
							<DatePicker
								onChange={this.onChange}
								value={this.state.date} />
						</p>
					</FormGroup>

					<FormGroup>
						<Label for="numberOfPeople">Número de Pessoas</Label>
						<Input type="select" name="numberOfPeople" id="numberOfPeople">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Input>
						</FormGroup>

					<FormGroup>
						<Label for="message">Mensagem:</Label>
						<Input 
							type="textarea"
							name="message"
							onChange={this.handleChange} />
					</FormGroup>

					<Button>Solicitar Orçamento</Button>
				</Form>

			</div>
    );
  }
}

export default Content;


