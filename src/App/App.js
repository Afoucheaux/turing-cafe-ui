import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js'


const resyData = [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
