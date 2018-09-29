import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class PersonalData extends Component {

    constructor(props) {
        super(props);
        this.handleChange = props.onChange;
    }
    
    render() {
        return(
            <div>
                <FormGroup>
                    <Label className="bold" for="name">Nome</Label>
                    <Input 
                        type="text"
                        name="name"
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label className="bold" for="email">Email</Label>
                    <Input 
                        type="email"
                        name="email"
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label className="bold" for="phone">Telefone</Label>
                    <Input 
                        type="text"
                        name="phone"
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label className="bold" for="city">Cidade</Label>
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