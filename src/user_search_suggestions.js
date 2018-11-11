//@ flow
import React, { Component } from 'react';
import { Card, DropdownItem, Row, Col, CardBody } from 'reactstrap';
import PropsType from 'prop-types'
import {Redirect} from 'react-router';
import './search_suggestions.css'

type SuggestionProps = {
	user: PropsType.Object,
};

class UserSuggestion extends Component<SuggestionProps>{
	state = {
		redirect: false,
	}

	handleOnClick = (e) =>{
		if(e){
			this.setState({
				redirect: true,
			})
		}
	}

	render(){

		if(this.state.redirect){
			return <Redirect push to={"/persona/" + this.props.user.twitter_user}/>;
		}

		return(
			<DropdownItem className='suggested-user-dropdown-item' onMouseDown={this.handleOnClick}>
				<Row>
					<Col xs={12}>
						<CardBody className='suggested-user-card-container'>
							<img className='suggested-user-avatar' src={this.props.user.twitter_avatar_url} />
							<div className='suggested-user-details'>
								<div className='suggested-user-name'>{this.props.user.twitter_name_stylized}</div>
								<div className='suggested-user-twitter-handle'>
									{this.props.user.twitter_user_handle}
								</div>
							</div>
						</CardBody>
					</Col>
				</Row>
			</DropdownItem>
		)
	}
}

type SuggestionsProps = {
	users: Array,
};

class UserSearchSuggestions extends Component<SuggestionsProps>{

	render(){

		const suggestions = this.props.users.map((user) =>{
			return(
				<UserSuggestion user={user} />
			)
		})
		return(
			<Card className='search-suggestions-container'>
				{/*<ul className='search-suggestions-list'>
					
				</ul>*/}
				{suggestions}
			</Card>
		)
	}
};

export default UserSearchSuggestions;