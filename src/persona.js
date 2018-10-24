//@ flow
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PersonaHeader from './persona_header.js'
import Content from './content/content.js'

var Props = {};

class Persona extends Component<Props>{
	render(){
		return(
			<Container>
				<PersonaHeader />
				<Row>
					<Col xs={12} md={6} lg={4}>
						<Content />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Persona;