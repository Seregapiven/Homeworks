import './App.css'; 
import Table from '../Table/Table';

import React, { useEffect, useState } from 'react';
import {createItem, deleteItem, getList} from '../../services/contactsService';


function App() {
    const [contactsList, setContactsList] = useState([]);
   

    useEffect(() => {
        getList().then(setContactsList);
    }, []);

    function saveContact(contact) {
        createItem(contact).then((data) => {
            setContactsList([...contactsList, data]);
        });
    }

    function deleteContact(id) {
        deleteItem(id).then(() => {
            setContactsList(contactsList.filter((item) => item.id !== id));
        });
    }
 

  return (
    <div className="container">
            <Table contacts={contactsList} onDelete={deleteContact} onSave={saveContact}/>
           </div>
  )
}

export default App