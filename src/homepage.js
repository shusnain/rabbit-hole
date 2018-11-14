//@ flow
import React, { Component } from 'react';
import TopPersonas from './top_personas.js'
import TopTweets from './top_tweets.js'
import axios from 'axios'

type Props = {};

var dummy_persona_props ={
	persona_name: 'naval',
	persona_name_stylized: 'Naval',
	persona_avatar: 'https://pbs.twimg.com/profile_images/749155852683055104/0StT9uYS_bigger.jpg',
	persona_twitter_url: 'https://twitter.com/naval',
	persona_twitter_handle: '@naval',
	top_tweet: ['https://twitter.com/naval/status/1052856864965152769','https://twitter.com/naval/status/1052948164154613761','https://twitter.com/naval/status/1052952734725419008'],
};

var dummy_persona_props_2 ={
	persona_name: 'morganhousel',
	persona_name_stylized: 'Morgan Housel',
	persona_avatar: 'https://pbs.twimg.com/profile_images/1050020823119974400/X9muqhg1_bigger.jpg',
	persona_twitter_url: 'https://twitter.com/morganhousel/',
	persona_twitter_handle: '@morganhousel',
	top_tweet: ['https://twitter.com/morganhousel/status/1003288465000321025'],
};

var dummy_tweets = {
	'0': {
			tweet_paths: ['https://twitter.com/naval/status/1051578799098195969'],
			card_source: 'twitter',
			twitter_type: 'twitter_video'
		},

		'1': {
			tweet_paths: ['https://twitter.com/naval/status/1052856864965152769','https://twitter.com/naval/status/1052948164154613761','https://twitter.com/naval/status/1052952734725419008'],
			card_source: 'twitter',
			twitter_type: 'twitter_tweets'
		},

		'2': {
			tweet_paths: ['https://twitter.com/naval/status/1002103360646823936','https://twitter.com/naval/status/1002103497725173760','https://twitter.com/naval/status/1002103559276478464','https://twitter.com/naval/status/1002103627387813888','https://twitter.com/naval/status/1002103670400417792','https://twitter.com/naval/status/1002103723848450049','https://twitter.com/naval/status/1002103770518441989','https://twitter.com/naval/status/1002103832879419392','https://twitter.com/naval/status/1002103908947263488','https://twitter.com/naval/status/1002103969781448704','https://twitter.com/naval/status/1002104083694501890','https://twitter.com/naval/status/1002104154737684480','https://twitter.com/naval/status/1002104865919664128','https://twitter.com/naval/status/1002104947624722433','https://twitter.com/naval/status/1002105081855016961','https://twitter.com/naval/status/1002105148733206528','https://twitter.com/naval/status/1002105194170085376','https://twitter.com/naval/status/1002105243767787520','https://twitter.com/naval/status/1002105652792066048','https://twitter.com/naval/status/1002105838713028609','https://twitter.com/naval/status/1002106224123432960','https://twitter.com/naval/status/1002106317064949763','https://twitter.com/naval/status/1002106623639212032','https://twitter.com/naval/status/1002106698889183234','https://twitter.com/naval/status/1002106775036874752','https://twitter.com/naval/status/1002106893265920000','https://twitter.com/naval/status/1002106977273565184','https://twitter.com/naval/status/1002107377598873600','https://twitter.com/naval/status/1002107570692112384','https://twitter.com/naval/status/1002107679353942016','https://twitter.com/naval/status/1002107808202960896'],
			card_source: 'twitter',
			twitter_type: 'twitter_tweets'
		},
}

class Homepage extends Component<Props>{

	state = {
		top_users_limit: 3,
		top_personas: [],
	}

	componentDidMount = () =>{
		this.getTopUsers()
	}

	getTopUsers = () =>{
		var homepage = this
  		axios.get('http://localhost:8000/top_users/' + this.state.top_users_limit + '/').then(function(response){
  			console.log(response.data)
  			var length = response.data.length
  			var top_personas = []
  			for(var i = 0; i < length; i++){
  				var persona = response.data[i]
  				var obj = {
  							persona_name: persona.twitter_user,
							persona_name_stylized: persona.twitter_name_stylized,
							persona_avatar: persona.twitter_avatar_url,
							persona_twitter_url: persona.twitter_user_url,
							persona_twitter_handle: persona.twitter_user_handle,
							top_tweet: ['https://twitter.com/morganhousel/status/1003288465000321025'],
						}
				top_personas.push(obj)
				homepage.setState({
					top_personas: top_personas,
				})
  			}
  		})
	};

	render(){

		return(
			<div>
				<div class='top-personas-container'>
					<TopPersonas top_personas={this.state.top_personas}/>
				</div>
			</div>
		)
	}
}

export default Homepage;