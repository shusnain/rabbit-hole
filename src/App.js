//@ flow
import React, { Component } from 'react';
import { Container} from 'reactstrap';
import Persona from './persona.js'
import Header from './navs/header.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
  			<Persona />
      </div>
    );
  }
}

export default App;
