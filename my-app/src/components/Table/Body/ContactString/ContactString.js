import React, { Component } from 'react'
import './ContactString.css'
export class ContactString extends Component {

  onDeleteClick = (e) => {
    e.stopPropagation();
    this.props.onDelete(this.props.cell.id);
  };




  render() {
    return (
      <tr>
        <td>{this.props.cell.name}</td>
        <td>{this.props.cell.surname}</td>
        <td>{this.props.cell.email}</td>
        <td><button className='Btn' onClick={this.onDeleteClick}>Delete</button></td>
     </tr>
    )
  }
}

export default ContactString