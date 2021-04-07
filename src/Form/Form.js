import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        id: '',
        name: '',
        date: '',
        time: '',
        number: 0
      }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  }

  clearForm = () => {
    this.setState({id: '', name: '', date: '', time: '', number: 0})
  }

  submitResy = event => {
    event.preventDefault();
    const newResy = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewResy(newResy);
    this.clearForm();
  }

  render() {
    return (
     <form className='reservation-form'>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={this.state.name}
        onChange={event => this.handleChange(event)}
      />
      <input
        type='text'
        placeholder='date (mm/dd)'
        name='date'
        value={this.state.date}
        onChange={event => this.handleChange(event)}
      />
      <input
        type='text'
        placeholder='time'
        name='time'
        value={this.state.time}
        onChange={event => this.handleChange(event)}
      />
      <input
        type='number'
        placeholder='number'
        name='number'
        min='1'
        max='15'
        value={this.state.number}
        onChange={event => this.handleChange(event)}
      />
      <button onClick={event => this.submitResy(event)} className="form=button">Make Reservation</button>
     </form>
    )
  }

}

export default Form;
