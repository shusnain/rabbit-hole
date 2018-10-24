//@ flow
import React, { Component } from 'react';
import {Navbar} from 'reactstrap';
import './navs.css'

type Props = {};

class Header extends Component<Props>{
	render(){
		return(
			<Navbar className='header-nav' static='top'>
			</Navbar>
		)
	}
}

export default Header;