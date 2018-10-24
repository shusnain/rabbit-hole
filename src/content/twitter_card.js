// @flow
import React, { Component } from 'react';
import PropsType from 'prop-types'
import { Card, CardText, CardBody } from 'reactstrap';
import Tweet from './tweet.js'
import TwitterModal from './twitter_modal.js'
import './content.css'

type Props = {
	tweet_paths: PropsType.Array,
	card_type: string,
};

type State = {
	page: number,
	content_per_page: number,
	modal: boolean,
};

class TwitterCard extends Component<Props, State>{
	state = {
		page: 0,
		content_per_page: 4,
		modal: false,
	};

	handleExpand = (event: Event) => {
		this.setState(state => ({
			page: state.page + 1,
		}))
		
	};

	handleCollapse = (event: Event) => {
		this.setState(state => ({
			page: 0
		}))
		
	};

	toggleModal = (event: Event) => {
	    this.refs.modal.toggle()
	};

	openTwitterModal = (event: Event) => {
	    this.setState(state => ({
	      modal: true
	    }))
	};

	contentIndex = () =>{
		return this.state.page * this.state.content_per_page + 1
	};

	contentLength = () =>{
		return this.props.tweet_paths.length
	};

	getHiddenContent = () =>{
		var diff = this.contentLength() - this.contentIndex()
		return diff >= 0 ? diff : 0
	};

	getContent = () =>{
		var contentIndex = this.contentIndex()
		var currentContent = this.props.tweet_paths.slice(0, contentIndex)
		return currentContent.map((tweet, index) => <Tweet key={index} tweet_path={tweet} card_type={this.props.card_type}/>)
	};

	getCardActions = () => {
		if(this.contentLength() > 1){
			var tweet_text = this.getHiddenContent() > 1 ? 'Tweets' : "Tweet"
			var expandActionClass = this.getHiddenContent() === 0 ? 'hide expand-card' : 'expand-card'
			var collapseActionClass = this.state.page === 0? 'hide collapse-card' : 'collapse-card'
			return (
				<div className='card-action'>
					{/*<CardText className={collapseActionClass} onClick={this.handleCollapse}>Collapse</CardText>*/}
					<CardText className={expandActionClass}>Read {this.contentLength()} {tweet_text}</CardText>
				</div>
				)
		}

		return null;
	}

	render(){
		
		var content = this.getContent()
		var actions = this.getCardActions()
		
		return(
			<div>
				<TwitterModal ref='modal' tweet_paths={this.props.tweet_paths} card_type={this.props.card_type}/>
				<Card className = 'twitter-card' onClick={this.toggleModal}>
					<span class='disable-links'>
						{content}
					</span>
						<CardBody>
							{actions}
						</CardBody>
				</Card>
			</div>
		)
	}
}

export default TwitterCard;