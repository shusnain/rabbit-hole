//@ flow
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PersonaHeader from './persona_header.js'
import Content from './content/content.js'

var Props = {};

class Persona extends Component<Props>{
	render(){
		return(
			<div>
				<PersonaHeader />
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