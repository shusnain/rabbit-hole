// @flow
import React, { Component } from 'react';
import PropsType from 'prop-types'
import { CardColumns } from 'reactstrap';
import TwitterCard from './twitter_card.js'
import './content.css'

var cardSourceEnum = {
	'twitter': 'twitter'
};

type Props = {
	persona_name: string,
};

type State = {
	content: Object;
};


class Content extends Component<Props, State>{

	state = {
		content: {},
	};

	componentDidMount = () =>{
		this.getTweets()
	}

	getTweets = () =>{
		var content = this
		fetch('http://localhost:8000/tweets/' + this.props.persona_name).then(function(response) {
			if(response.status === 200){
				return response.json();	
			}
  		}).then(function(response_json){
  			var tweets = response_json;
    		content.setState(state => ({
				content: tweets,
			}))
  		})
	};

	render(){
		
		var content = this.state.content
		var twitter_cards = Object.keys(content).map(function(key) {
			var tweet = content[key]
			return <TwitterCard key={key} tweet_paths={tweet.tweets} twitter_type={tweet.twitter_type} />
		})	
		

		return (
			<div class='content-container'>
				<CardColumns className='card-columns-style'>
        	  		{twitter_cards}
        	  	</CardColumns>
    		</div>
		)
	}
}

export default Content;