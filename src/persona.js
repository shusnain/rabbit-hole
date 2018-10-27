//@ flow
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PersonaCard from './persona_card.js'
import Content from './content/content.js'

var Props = {};

class Persona extends Component<Props>{
	render(){
		return(
			<div>
				<PersonaCard />
				<Row>
					<Col xs={12}>
						<Content />
					</Col>
				</Row>
			</div>
		)
	}
}

export default Persona;