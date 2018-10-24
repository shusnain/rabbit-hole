// @flow
import React, { Component } from 'react';
import './content.css'

type Props ={
	tweet_path: string,
	autoplay?: boolean,
	card_type: string,
};


class Tweet extends Component<Props>{
	componentDidMount = () => {
		if(typeof window !== 'undefined' && window.twttr.widgets){
			window.twttr.widgets.load()
		}
	};

	createTweetURL = () => {
		var path = 'https://twitter.com';
		return path + this.props.tweet_path;
	};

	autoPlayVideo= () => {
		if(this.props.autoplay && 
		 	this.props.card_type === 'twitter_video' &&
			document != null && 
			document.querySelector('.modal') != null && // $FlowFixMe
			document.querySelector('.modal').querySelector('.twitter-tweet') != null && // $FlowFixMe
			document.querySelector('.modal').querySelector('.twitter-tweet').shadowRoot != null && // $FlowFixMe
			document.querySelector('.modal').querySelector('.twitter-tweet').shadowRoot.querySelector('.Icon--playCircle') != null){ // $FlowFixMe
			document.querySelector('.modal').querySelector('.twitter-tweet').shadowRoot.querySelector('.Icon--playCircle').click() // $FlowFixMe
		}
	}

	render(){
		var autoPlay = this.autoPlayVideo();
		return(
			<div>
				<blockquote className="twitter-tweet" data-conversation="none" data-lang="en" data-theme="light"><a href={this.createTweetURL()}></a></blockquote>
			</div>
)
	}
}

export default Tweet;