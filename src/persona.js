//@ flow
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PersonaCard from './persona_card.js'
import Content from './content/content.js'

type Props = {};

class Persona extends Component<Props>{
	render(){
		return(
			<div>
				<PersonaCard persona_name={this.props.match.params.persona_name} />
				<Row>
					<Col xs={12}>
						<Content persona_name={this.props.match.params.persona_name}/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Persona;