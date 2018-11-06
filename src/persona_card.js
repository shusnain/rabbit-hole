//@ flow
import React, { Component } from 'react';
import PropsType from 'prop-types'
import { Card, CardText, CardBody } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import './persona.css'

type Props = {
	persona_name: string,
};

type State = {
	persona_name: string,
	persona_name_stylized: string,
	persona_avatar: string,
	persona_twitter_url: string,
	persona_twitter_handle: string,
	hide_class: string,
};

class PersonaCard extends Component<Props, State>{

	state = {
		persona_name: null,
		persona_name_stylized: null,
		persona_avatar: null,
		persona_twitter_url: null,
		persona_twitter_handle: null,
		hide_class: 'hide',
	};

	componentDidMount = () =>{
		this.getPersona()
	}

	getPersona = () =>{
		var content = this
		fetch('http://localhost:8000/user/' + this.props.persona_name).then(function(response) {
			if(response.status === 200){
				return response.json();	
			}
  		}).then(function(response_json){
  			var user = response_json;
    		content.setState(state => ({
				persona_name: user.twitter_name,
				persona_name_stylized: user.twitter_name_stylized,
				persona_avatar: user.twitter_avatar_url,
				persona_twitter_url: user.twitter_user_url,
				persona_twitter_handle: user.twitter_user_handle,
				hide_class: '',
			}))
  		})
	};

	render(){
		return(
			<Card className={'persona-card ' + this.state.hide_class}>
				<Row>
					<Col xs={12}>
						<CardBody className='persona-card-container'>
							<a href={this.state.persona_twitter_url} target='_blank'>
								<img className='persona-avatar' src={this.state.persona_avatar} />
							</a>
							<div className='persona-details'>
								<div className='persona-name'>{this.state.persona_name_stylized}</div>
								<span>
									<a className='persona-twitter-handle' href={this.state.persona_twitter_url} target='_blank'>
										{this.state.persona_twitter_handle}
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

export default PersonaCard;