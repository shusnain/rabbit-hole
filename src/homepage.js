//@ flow
import React, { Component } from 'react';
import TopPersonas from './top_personas.js'

type Props = {};

var dummy_props ={
	persona_name: 'naval',
	persona_name_stylized: 'Naval',
	persona_avatar: 'https://pbs.twimg.com/profile_images/749155852683055104/0StT9uYS_bigger.jpg',
	persona_twitter_url: 'https://twitter.com/naval',
	persona_twitter_handle: '@naval',
	top_tweet: ['/naval/status/1052856864965152769','/naval/status/1052948164154613761','/naval/status/1052952734725419008'],
};

class Homepage extends Component<Props>{
	render(){
		return(
			<div>
				<TopPersonas top_personas={[dummy_props, dummy_props, dummy_props]} />
			</div>
		)
	}
}

export default Homepage;