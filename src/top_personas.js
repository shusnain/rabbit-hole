//@ flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col } from 'reactstrap'
import {Redirect} from 'react-router';
import TwitterCard from './content/twitter_card.js'
import './top_persona.css'

type TopPersonaProps = {
	persona_name: string,
	persona_name_stylized: string,
	persona_avatar: string,
	persona_twitter_url: string,
	persona_twitter_handle: string,
	top_tweet: string,
};

type TopPersonaState = {
	redirect: boolean;
};

type TopPersonasProps = {
	top_personas: PropTypes.Object,
};

class TopPersona extends Component<TopPersonaProps, TopPersonaState>{

	state = {
		redirect: false
	};

	handleOnClick = () =>{
		this.setState({
			redirect: true
		})
	};

	stopParentOnClick = (e) =>{
		e.stopPropagation();
	}

	render(){

		if(this.state.redirect){
			return <Redirect push to="/persona" />;
		}

		return(
			<Card className='top-persona-card persona-card' onClick={this.handleOnClick} >
				<CardBody className='top-persona-body'>
					<div className='persona-card-container'>
						<a href={this.props.persona_twitter_url} target='_blank' onClick={this.stopParentOnClick}>
							<img className='persona-avatar' src={this.props.persona_avatar} />
						</a>
						<div class='persona-details'>
							<div class='persona-name'>{this.props.persona_name_stylized}</div>
							<span>
								<a className='persona-twitter-handle' href={this.props.persona_twitter_url} target='_blank' onClick={this.stopParentOnClick}>
									{this.props.persona_twitter_handle}
								</a>
							</span>
						</div>
					</div>
					<div className='top-persona-twitter-card' onClick={this.stopParentOnClick}>
						<TwitterCard tweet_paths={this.props.top_tweet} />
					</div>
				</CardBody>
			</Card>
		)
	}
}


class TopPersonas extends Component<TopPersonasProps>{
	render(){
		
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