//@ flow
import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import './persona.css'

type Props = {
	persona_name: string,
	persona_name_stylized: string,
	persona_avatar: string,
	persona_twitter_url: string,
	persona_twitter_handle: string,
};

var dummy_props ={
	persona_name: 'naval',
	persona_name_stylized: 'Naval',
	persona_avatar: 'https://pbs.twimg.com/profile_images/749155852683055104/0StT9uYS_bigger.jpg',
	persona_twitter_url: 'https://twitter.com/naval',
	persona_twitter_handle: '@naval',
};

class PersonaHeader extends Component<Props>{
	render(){
		return(
			<Card className='persona-header'>
				<Row>
					<Col xs={12}>
						<CardBody className='persona-header-container'>
							<a href={dummy_props.persona_twitter_url} target='_blank'>
								<img class='persona-avatar' src={dummy_props.persona_avatar} />
							</a>
							<div class='persona-details'>
								<div class='persona-name'>{dummy_props.persona_name_stylized}</div>
								<span>
									<a className='persona-twitter-handle' href={dummy_props.persona_twitter_url} target='_blank'>
										{dummy_props.persona_twitter_handle}
									</a>
								</span>
							</div>
						</CardBody>
					</Col>
				</Row>
			</Card>
		)
	}
}

export default PersonaHeader;