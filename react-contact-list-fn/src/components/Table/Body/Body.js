import React from 'react'
import ContactRow from '../ContactRow/ContactRow'


function Body({contacts,onDelete}) {
  return (
    <tbody >
    {contacts.map((item) => (
    <ContactRow key={item.id} cell={item} onDelete={onDelete}/>
    ))}
    </tbody>
  )
}

export default Body