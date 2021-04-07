import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ResLayout from '../ResLayout/ResLayout';

const resyData = [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: resyData
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ResLayout />
        </div>
      </div>
    )
  }
}

export default App;
