import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

class PersonalData extends Component {

    constructor(props) {
        super(props);
        this.handleChange = props.onChange;
    }
    
    render() {
        return(
            <div>
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
                    <Label className="label-container" for="phone">Telefone</Label>
                    <Input 
                        type="text"
                        name="phone"
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup className="form-group-container">
                    <Label className="label-container" for="city">Cidade</Label>
                    <Input 
                        type="text"
                        name="city"
                        onChange={this.handleChange} />
                </FormGroup>
            </div>
        )
    }
}

export default PersonalData;