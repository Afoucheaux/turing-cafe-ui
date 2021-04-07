import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ResLayout from '../ResLayout/ResLayout.js';
import getReservations from './Api-calls.js';

const resyData = [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }, { id: 18907225, name: 'Christie', date: '8/8', time: '7:00', number: 3 }, { id: 18907226, name: 'Christie', date: '8/8', time: '7:00', number: 3 }
]

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
