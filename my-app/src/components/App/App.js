import './App.css';

import React, { Component } from 'react';

import Form from '../Form/Form';
import Table from '../Table/Table';

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
      <div className='main'>
        <Table contacts={this.state.contacts}
          onDelete={this.deleteContact} />
        <Form onSave={this.createContact} />
      </div>
    );
  }
 }

export default App;