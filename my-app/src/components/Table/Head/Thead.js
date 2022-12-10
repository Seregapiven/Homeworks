import React, { Component } from 'react'

export class Thead extends Component {
  render() {
    return (
      <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
    )
  }
}

export default Thead