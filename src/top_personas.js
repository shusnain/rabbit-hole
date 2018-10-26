//@ flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col } from 'reactstrap'
import TwitterCard from './content/twitter_card.js'

type TopPersonaProps = {
	persona_name: string,
	persona_name_stylized: string,
	persona_avatar: string,
	persona_twitter_url: string,
	persona_twitter_handle: string,
	top_tweet: string,
};

type TopPersonasProps = {
	top_personas: PropTypes.Object,
};

class TopPersona extends Component<TopPersonaProps>{
	render(){
		return(
			<Card className='persona-header'>
				<CardBody className='top-persona-body'>
					<div className='persona-header-container'>
						<a href={this.props.persona_twitter_url} target='_blank'>
							<img className='persona-avatar' src={this.props.persona_avatar} />
						</a>
						<div class='persona-details'>
							<div class='persona-name'>{this.props.persona_name_stylized}</div>
							<span>
								<a className='persona-twitter-handle' href={this.props.persona_twitter_url} target='_blank'>
									{this.props.persona_twitter_handle}
								</a>
							</span>
						</div>
					</div>
					<div className='top-persona-twitter-card'>
						<TwitterCard tweet_paths={this.props.top_tweet} />
					</div>
				</CardBody>
			</Card>
		)
	}
}


class TopPersonas extends Component<TopPersonasProps>{
	render(){
		console.log(this.props)
		var top_personas = this.props.top_personas.map((propsObject, i) =>
			<Col xs={12} sm={4} className='top-persona-col' key={i}>
				<TopPersona {...propsObject}/>
			</Col>
		)

		return(
			<Row>
				{top_personas}
			</Row>
		)
	}
}

export default TopPersonas;