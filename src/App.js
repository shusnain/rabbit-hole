//@ flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container} from 'reactstrap';
import Header from './navs/header.js';
import Homepage from './homepage.js';
import Persona from './persona.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
			<Route exact path ="/" component= {Homepage} />
			<Route path ="/persona" component= {Persona} />
		</Container>
      </div>
    );
  }
}

export default App;
