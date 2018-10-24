// @flow
import React, { Component } from 'react';
import PropsType from 'prop-types'
import Tweet from './tweet.js'


type Props = {
	tweet_paths: PropsType.Array,
	card_type: string,
};

class TwitterList extends Component<Props>{
	getContent = () =>{
		return this.props.tweet_paths.map((tweet, index) => <Tweet key={index} tweet_path={tweet} autoplay={true} card_type={this.props.card_type}/>)
	};

	render(){
		var content = this.getContent()
		return(
			<div>
				{content}
			</div>
		)
	}
}

export default TwitterList;