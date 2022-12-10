import './Table.css';
import React, { Component } from 'react'
import Tbody from './Body/Tbody'
import Thead from './Head/Thead'
export class Table extends Component {
  render() {
    return (
      <table className='table' >
            <Thead/>
            <Tbody
            contacts={this.props.contacts}
            onDelete={this.props.deleteContact} />
        </table>
    )
  }
}

export default Table