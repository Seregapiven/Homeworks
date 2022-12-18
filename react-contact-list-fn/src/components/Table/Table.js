import './Table.css'
import React from 'react'

import Head from './Head/Head'
import Body from './Body/Body'
import Foot from './Foot/Foot'

function Table({contacts,onDelete,onSave}) {
  return (
    <table className="table">
      <Head/>
      <Body contacts={contacts} onDelete={onDelete}/>
      <Foot onSave={onSave} />
    </table>
  )
}
export default Table
