import React from 'react'
import './ContactRow.css'

function ContactRow({cell,onDelete}) {
  return (
    <tr className='contactrow' >
    <td className='td'>{cell.name}</td>
    <td className='td'>{cell.surname}</td>
    <td className='td'>{cell.email}</td>
    <td className='td'> <button onClick={() => onDelete(cell.id)}>Delete</button> </td>
    
</tr>
  )
}

export default ContactRow