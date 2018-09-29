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
                <FormGroup>
					<Label className="bold" for="eventName">Nome do Evento</Label>
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