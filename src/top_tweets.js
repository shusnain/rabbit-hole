//@ flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap'
import TwitterCard from './content/twitter_card.js'
import './top_persona.css'

type TopTweetsProps = {
	top_tweets: PropTypes.Object,
};


class TopTweets extends Component<TopTweetsProps>{
	render(){
		var top_tweets = this.props.top_tweets
		var tweets = Object.keys(top_tweets).map(function(key) {
			var propsObject = top_tweets[key]
			return (<Col xs={12} sm={4} className='top-persona-col' key={key}>
				<TwitterCard {...propsObject}/>
			</Col>)
		})

		return(
			<Row>
				{tweets}
			</Row>
		)
	}
}

export default TopTweets;