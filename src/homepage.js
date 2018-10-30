//@ flow
import React, { Component } from 'react';
import TopPersonas from './top_personas.js'
import TopTweets from './top_tweets.js'

type Props = {};

var dummy_persona_props ={
	persona_name: 'naval',
	persona_name_stylized: 'Naval',
	persona_avatar: 'https://pbs.twimg.com/profile_images/749155852683055104/0StT9uYS_bigger.jpg',
	persona_twitter_url: 'https://twitter.com/naval',
	persona_twitter_handle: '@naval',
	top_tweet: ['/naval/status/1052856864965152769','/naval/status/1052948164154613761','/naval/status/1052952734725419008'],
};

var dummy_persona_props_2 ={
	persona_name: 'naval',
	persona_name_stylized: 'Naval',
	persona_avatar: 'https://pbs.twimg.com/profile_images/749155852683055104/0StT9uYS_bigger.jpg',
	persona_twitter_url: 'https://twitter.com/naval',
	persona_twitter_handle: '@naval',
	top_tweet: ['/naval/status/1051578799098195969'],
};

var dummy_tweets = {
	'0': {
			tweet_paths: ['/naval/status/1051578799098195969'],
			card_source: 'twitter',
			twitter_type: 'twitter_video'
		},

		'1': {
			tweet_paths: ['/naval/status/1052856864965152769','/naval/status/1052948164154613761','/naval/status/1052952734725419008'],
			card_source: 'twitter',
			twitter_type: 'twitter_tweets'
		},

		'2': {
			tweet_paths: ['/naval/status/1002103360646823936','/naval/status/1002103497725173760','/naval/status/1002103559276478464','/naval/status/1002103627387813888','/naval/status/1002103670400417792','/naval/status/1002103723848450049','/naval/status/1002103770518441989','/naval/status/1002103832879419392','/naval/status/1002103908947263488','/naval/status/1002103969781448704','/naval/status/1002104083694501890','/naval/status/1002104154737684480','/naval/status/1002104865919664128','/naval/status/1002104947624722433','/naval/status/1002105081855016961','/naval/status/1002105148733206528','/naval/status/1002105194170085376','/naval/status/1002105243767787520','/naval/status/1002105652792066048','/naval/status/1002105838713028609','/naval/status/1002106224123432960','/naval/status/1002106317064949763','/naval/status/1002106623639212032','/naval/status/1002106698889183234','/naval/status/1002106775036874752','/naval/status/1002106893265920000','/naval/status/1002106977273565184','/naval/status/1002107377598873600','/naval/status/1002107570692112384','/naval/status/1002107679353942016','/naval/status/1002107808202960896'],
			card_source: 'twitter',
			twitter_type: 'twitter_tweets'
		},
}

class Homepage extends Component<Props, State>{

	render(){

		return(
			<div>
				<div>	
					<TopTweets top_tweets={dummy_tweets}/>
				</div>
				<div class='top-personas-container'>
					<TopPersonas top_personas={[dummy_persona_props_2, dummy_persona_props, dummy_persona_props]}/>
				</div>
			</div>
		)
	}
}

export default Homepage;