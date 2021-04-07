import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ResLayout from '../ResLayout/ResLayout.js';
import getReservations from './Api-calls.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(resy => this.setState( {reservations: resy} ))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <Form />
          <ResLayout reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
