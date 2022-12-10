import React, { Component } from 'react'

export class ContactString extends Component {

  onDeleteClick = (e) => {

    this.props.onDelete(this.props.cell.id);
  };

  render() {
    return (
      <tr>
        <td>{this.props.cell.name}</td>
        <td>{this.props.cell.surname}</td>
        <td>{this.props.cell.email}</td>
        <td><button onClick={this.onDeleteClick}>Del</button></td>
     </tr>
    )
  }
}

export default ContactString