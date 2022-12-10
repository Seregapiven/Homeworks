import './App.css';

import React, { Component } from 'react';
import Thead from '../Table/Head/Thead';
import Tbody from '../Table/Body/Tbody';
import Form from '../Form/Form';

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "Stiv", surname: "Bark", email: "stivbark@gmail.com" },
      { id: 2, name: "Alex", surname: "Black", email: "alex@gmail.com" },
      { id: 3, name: "Nik", surname: "Fisher", email: "fisher@gmail.com" },
      { id: 4, name: "Kevin", surname: "Clark", email: "kevin@gmail.com"},
    ],
  }
  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== id),
  })
  }
  


  createContact = (newContact) => {
    this.setState({
      contacts: [...this.state.contacts,
        {
          ...newContact,
          id: Date.now(),
      }]
    })
  }
  render() {
    return (
      <>
        <table>
            <Thead/>
            <Tbody
            contacts={this.state.contacts}
            onDelete={this.deleteContact} />
        </table>
        <Form onSave={this.createContact} />
      </>
    );
  }
 }

export default App;