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
	// tweets: PropsType.Array,
	content: PropsType.Object
};

var dummyProps = {
	content: {
		'0': {
			tweet_paths: ['/naval/status/1051578799098195969'],
			card_source: 'twitter',
			card_type: 'twitter_video'
		},

		'1': {
			tweet_paths: ['/naval/status/1052856864965152769','/naval/status/1052948164154613761','/naval/status/1052952734725419008'],
			card_source: 'twitter',
			card_type: 'twitter_tweets'
		},

		'2': {
			tweet_paths: ['/naval/status/1002103360646823936','/naval/status/1002103497725173760','/naval/status/1002103559276478464','/naval/status/1002103627387813888','/naval/status/1002103670400417792','/naval/status/1002103723848450049','/naval/status/1002103770518441989','/naval/status/1002103832879419392','/naval/status/1002103908947263488','/naval/status/1002103969781448704','/naval/status/1002104083694501890','/naval/status/1002104154737684480','/naval/status/1002104865919664128','/naval/status/1002104947624722433','/naval/status/1002105081855016961','/naval/status/1002105148733206528','/naval/status/1002105194170085376','/naval/status/1002105243767787520','/naval/status/1002105652792066048','/naval/status/1002105838713028609','/naval/status/1002106224123432960','/naval/status/1002106317064949763','/naval/status/1002106623639212032','/naval/status/1002106698889183234','/naval/status/1002106775036874752','/naval/status/1002106893265920000','/naval/status/1002106977273565184','/naval/status/1002107377598873600','/naval/status/1002107570692112384','/naval/status/1002107679353942016','/naval/status/1002107808202960896'],
			card_source: 'twitter',
			card_type: 'twitter_tweets'
		},

		'3': {
			tweet_paths: ['/PennieBrian/status/1051143179662254080'],
			card_source: 'twitter',
			card_type: 'twitter_tweet'
		},

		'4': {
			tweet_paths: ['/naval/status/1050533002353172480'],
			card_source: 'twitter',
			card_type: 'twitter_tweet'
		},

		'5': {
			tweet_paths: ['/naval/status/1053206878157627392'],
			card_source: 'twitter',
			card_type: 'twitter_tweet'
		},

		'6': {
			tweet_paths: ['/naval/status/877467629308395521', '/naval/status/877467713811042304', '/naval/status/877467815334117376', '/naval/status/877467874138378240', '/naval/status/877467950600429568', '/naval/status/877468017981927425', '/naval/status/877468095236849664', '/naval/status/877468176857968640', '/naval/status/877468244075872256', '/naval/status/877468361323495424', '/naval/status/877468715607924736', '/naval/status/877469177165918208', '/naval/status/877469246833307648', '/naval/status/877469304412708864', '/naval/status/877469376848445440', '/naval/status/877469430841724929', '/naval/status/877469523338608641', '/naval/status/877469590179028992', '/naval/status/877469645426393089', '/naval/status/877469715160903680', '/naval/status/877469777978990592', '/naval/status/877469839803142144', '/naval/status/877469913593421824', '/naval/status/877469982577184768', '/naval/status/877470093847912448', '/naval/status/877470341760598016', '/naval/status/877470419720183810', '/naval/status/877470481481220096', '/naval/status/877470539371102210', '/naval/status/877470634678247424', '/naval/status/877470691875987456'],
			card_source: 'twitter',
			card_type: 'twitter_tweets'
		},

		'7': {
			tweet_paths: ['/naval/status/912220382450524160', '/naval/status/912220750060199936', '/naval/status/912220922177662977', '/naval/status/912221077438214144', '/naval/status/912221530720919553', '/naval/status/912221681141161984', '/naval/status/912221855053791232', '/naval/status/912222017700556800', '/naval/status/912222091251871745', '/naval/status/912223590841331712', '/naval/status/912224234075676672', '/naval/status/912224395644461057'],
			card_source: 'twitter',
			card_type: 'twitter_tweets'
		}, 
		'8': {
			tweet_paths: ['/naval/status/964373521492094976', '/naval/status/964373627515715585', '/naval/status/964373712567877632', '/naval/status/964373809972232192', '/naval/status/964373899579289602', '/naval/status/964374022401155074', '/naval/status/964374173169590277', '/naval/status/964374283131604992', '/naval/status/964374393429217280', '/naval/status/964374922632900608', '/naval/status/964375205215846400', '/naval/status/964375455573819393', '/naval/status/964375606199599111', '/naval/status/964376983328010240'],
			card_source: 'twitter',
			card_type: 'twitter_tweets'
		}
	}
}



class Content extends Component<Props>{
	render(){
		var twitter_cards = Object.keys(dummyProps.content).map(function(key) {
			var tweet = dummyProps.content[key]
			var card_source = tweet.card_source
			if(card_source === cardSourceEnum['twitter']){
				return <TwitterCard key={key} tweet_paths={tweet.tweet_paths} card_type={tweet.card_type} />
			}
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