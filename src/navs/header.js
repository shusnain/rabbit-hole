//@ flow
import React, { Component } from 'react';
import {Navbar} from 'reactstrap';
import SearchUsers from '../search/search_users.js'
import './navs.css'

type Props = {};

class Header extends Component<Props>{

	render(){
		return(
			<Navbar className='header-nav' static='top'>
				<SearchUsers />
			</Navbar>
		)
	}
}

export default Header;