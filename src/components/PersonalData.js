import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const PersonalData = function(props) {
    return(
        <div>
            <div className="form-categories">
                <Label className="label-categories">Dados Pessoais</Label>
                <hr />
            </div>
			
            <FormGroup className="form-group-container">
                <Label className="label-container" for="name">Nome</Label>
                <Input 
                    type="text"
                    name="name"
                    onChange={props.handleChange} />
            </FormGroup>

            <FormGroup className="form-group-container">
                <Label className="label-container" for="email">Email</Label>
                <Input 
                    type="email"
                    name="email"
                    onChange={props.handleChange} />
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

export default PersonalData;