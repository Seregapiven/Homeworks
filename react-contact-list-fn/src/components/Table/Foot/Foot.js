
import React,{useState} from 'react'

function Foot({onSave}) {
    const [name,setName]=useState([]);
    const [surname,setSurname]=useState([]);
    const [email,setEmail]=useState([]);

    function onSaveBtnClick() {

        onSave({
            name: name,
            surname:surname,
            email:surname,
        }); 
        setName("");
        setSurname("");
        setEmail("");
    };

  return (
    <tfoot >
    <tr>
        <td>
            <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Name"
            />
        </td>
        <td>
            <input
                value={surname}
                onChange={(e)=>setSurname(e.target.value)}
                placeholder="Surname"
            />
        </td>
        <td>
            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
            />
        </td>
        <td><button onClick={onSaveBtnClick}>Save</button></td>
    </tr>
</tfoot>
  )
}

export default Foot