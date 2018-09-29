import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class Events extends Component {

    constructor(props) {
        super(props);
        this.handleChange = props.onChange;
    }
    
    render() {
        return(
            <div>
                <FormGroup className="form-group-container">
					<Label className="label-container" for="eventName">Nome do Evento</Label>
					<Input 
						type="text"
						name="eventName"
						onChange={this.handleChange} />
				</FormGroup>
            </div>
        )
    }
}

export default Events;