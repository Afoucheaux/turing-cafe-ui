import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ResLayout from '../ResLayout/ResLayout.js';
import { getReservations, postReservation, deleteReservation } from './Api-calls.js';

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

  addNewResy = (newResy) => {
    postReservation(newResy)
    .then(result => {
      if (result.id) {
        this.setState( {reservations: [...this.state.reservations, result] });
      }
    })
  }

  cancelResy = (id) => {
    deleteReservation(id)
    .then(response => {
      if (response.ok) {
        const filterResy = this.state.reservations.filter(resy => resy.id !== id)
      }
    })

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <Form  addNewResy={this.addNewResy}/>
          <ResLayout reservations={this.state.reservations} cancelResy={this.cancelResy}/>
      </div>
    )
  }
}

export default App;
