//@ flow
import React, { Component } from 'react';
import UserSearchSuggestions from './user_search_suggestions.js'
import axios from 'axios'
import './search.css'

class SearchUsers extends Component{
	state = {
   		query: '',
   		users: [],
   		hide_suggestions: 'hide',
 	}

	handleInputChange = () => {
		this.setState({
			 query: this.search.value,
		}, () =>{
			if(this.state.query && this.state.query.length >= 3){
				this.getUsers()
			}else{
				this.setState({
					users: [],
					hide_suggestions: 'hide'
				})
			}
		})
	}

	getUsers = (query) => {
		var search = this
		axios.get('http://localhost:8000/search_users/' + this.state.query).then(function(reponse){
			var users = reponse.data
			search.setState({
				users: users,
				hide_suggestions: '',
			})
		})
	}

	hideSuggestions = () =>{
		this.setState({
			hide_suggestions: 'hide'
		})
	}

	showSuggestions = () =>{
		if(this.state.users.length > 0){
			this.setState({
				hide_suggestions: ''
			})
		}
	}

	render() {
		return (
			<div className='search-container' onBlur={this.hideSuggestions} onFocus={this.showSuggestions}>
				<form className='search-form'>
		   			<input
		     			placeholder="Search Users"
		     			ref={input => this.search = input}
		     			onChange={this.handleInputChange}
		     			className = 'search-input'
		     			id = 'user-search-input'
		   			/>
		 		</form>
		 		<div className={this.state.hide_suggestions}>
		   				<UserSearchSuggestions users={this.state.users} />
   				</div>
	 		</div>
		)
	}
}

export default SearchUsers;