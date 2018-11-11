//@ flow
import React, { Component } from 'react';
import { Card } from 'reactstrap';
import {Redirect} from 'react-router';
import './search_suggestions.css'

type Props = {
	users: Array,
};

class UserSearchSuggestions extends Component<Props>{
	state = {
		redirect: false,
		redirect_persona: ''
	}

	handleOnClick = (e) =>{
		if(e){
			this.setState({
				redirect: true,
				redirect_persona: e.target.id,
			})
		}
	}

	render(){

		if(this.state.redirect){
			return <Redirect push to={"/persona/" + this.state.redirect_persona}/>;
		}

		const suggestions = this.props.users.map((user) =>{
			return(
				<li id={user.twitter_user} onMouseDown={this.handleOnClick}>
					{user.twitter_name_stylized}
				</li>
			)
		})
		return(
			<Card className='search-suggestions-container'>
				<ul className='search-suggestions-list'>
					{suggestions}
				</ul>
			</Card>
		)
	}
};

export default UserSearchSuggestions;