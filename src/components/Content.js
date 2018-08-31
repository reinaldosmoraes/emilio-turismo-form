import React, { Component } from 'react';

import '../App.css';
import TravelForm from './TravelForm';
import SubmittedForm from './SubmittedForm';

class Content extends Component {

	state = {
		travelFormSent: false
	};

	redirectToSubmittedForm = () => {
		this.setState({
			travelFormSent: true
		})
	}

	render() {

		if (!this.state.travelFormSent) {	
			return (
				<TravelForm onClick={() => this.redirectToSubmittedForm()} />
			);
		} else {
			return (
				<SubmittedForm />
			);
		}
	}
}

export default Content;
