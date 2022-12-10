import React, { Component } from 'react'

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
       <form onSubmit={this.onFormSubmit}>
          <input type="text" id="name" name="newName" placeholder="Contact name" />
          <input type="text" id="surname" name="newSurName" placeholder="Contact surname" />
          <input type="text" id="email" name="email" placeholder="Contact email" />
          <button>Save</button>

        </form>
    )
  }
}

export default Form