import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TravelForm from './TravelForm';
import Content from './Content';
import SubmittedForm from './SubmittedForm';
import PersonalData from './PersonalData';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} >
              Dados Pessoais
            </NavLink>
          </NavItem>
          
					<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }} >
              Evento
            </NavLink>
          </NavItem>
					
					<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }} >
              Aéreo
            </NavLink>
          </NavItem>

					<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>

        </Nav>
        
        <TabContent activeTab={this.state.activeTab}>
          
					<TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Content />
                <Button onClick={() => { this.toggle('5'); }}>Ir para o proximo</Button>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
						<PersonalData onChange={this.handleChange} />
          </TabPane>

          <TabPane tabId="5">
            <SubmittedForm />
          </TabPane>

        </TabContent>
      </div>
    );
  }
}