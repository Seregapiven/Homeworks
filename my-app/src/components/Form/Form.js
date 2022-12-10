import React, { Component } from 'react'
import './Form.css';
export class Form extends Component {
    onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSave({
      name: e.target.elements.newName.value,
      surname: e.target.elements.newSurName.value,
      email: e.target.elements.email.value,
    });
    e.target.reset();

  }
  render() {
    return (
       <form className='form' onSubmit={this.onFormSubmit}>
          <input className='input' type="text" name="newName" placeholder="Contact name" />
          <input className='input' type="text" name="newSurName" placeholder="Contact surname" />
          <input className='input' type="email" name="email" placeholder="Contact email" />
          <button className='Btn'>Save</button>
        </form>
    )
  }
}

export default Form