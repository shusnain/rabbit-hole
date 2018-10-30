// @flow
import React, { Component } from 'react';
import PropsType from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TwitterList from './twitter_list.js'
import './twitter_modal.css'

type Props = {
  tweet_paths: PropsType.Array,
  twitter_type: string,
};

type State = {
  modal: boolean,
};

class TwitterModal extends Component<Props, State> {

  state = {
    modal: false,
  };

  toggle = () =>{
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <TwitterList tweet_paths={this.props.tweet_paths} twitter_type={this.props.twitter_type}/>
          </ModalBody>
        </Modal>
    );
  }
}

export default TwitterModal;