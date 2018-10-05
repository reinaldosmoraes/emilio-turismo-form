import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Buttons extends Component {

    constructor(props) {
        super(props);
        // this.handleChange = props.onChange;
        this.handleSubmit = props.handleSubmit;
        this.changeTab = props.onClick;
    }
    
    render() {
        return(

            <div className="row-buttons">
                <Button className="submit-button" onClick={this.handleSubmit}>Solicitar Orçamento</Button>
                <Button className="next-tab-button" onClick={this.changeTab}>Avançar</Button>
            </div>


            
        )
    }
}

export default Buttons;