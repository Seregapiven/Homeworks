import React, { Component } from 'react'
import ContactString from './ContactString/ContactString'
export class Tbody extends Component {
  render() {
    return (
      <tbody id="contactsList">
        {this.props.contacts.map((item) => (
          <ContactString
            key={item.id}
            cell={item}
            onDelete={this.props.onDelete}
          />
          
        ))}
      </tbody>
    );
  }
}

export default Tbody