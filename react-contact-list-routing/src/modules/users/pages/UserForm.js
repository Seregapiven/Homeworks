import { Button, Paper, TextField, Box } from '@mui/material';
import {useState,useEffect} from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// eslint-disable-next-line
const EMAIL_REGEXP=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


function UserForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const {user, changeUser, saveUser } = useUser(id);
  const [isDirty, setIsDirty] = useState({
    name:false,
    surname:false,
    email:false,
  });
  const[errors, SetErrors] = useState({})

  useEffect(() => {
    SetErrors(validate(user))

  }, [user]);

  function onInputChange(e) {

    changeUser({
      [e.target.name]: e.target.value,
    });

    setIsDirty({...isDirty,
      [e.target.name]: true,});
  }

function validate(values){
const erors={}
  if (values.name === '') {
    erors.name = 'Name is required';
  }
  if (values.surname === '') {
    erors.surname = 'Surname is required';
  }
  if (values.email === '') {
    erors.email = 'Email is required';
  }
  if (!EMAIL_REGEXP.test(values.email)) {
    erors.email = 'Email is Invalid';
  }
  return erors;
}

function isValid(){
  return!Object.keys(errors).length;
}

  function onFormSubmit(e) {
    e.preventDefault();

    saveUser(user).then(() => navigate('..'))
  }

  return <Paper sx={{ marginTop: '20px' }}>
    <form onSubmit={onFormSubmit}>
    <TextField
      name="name"
      label="Name"
      variant="outlined"
      fullWidth
      value={user.name}
      onChange={onInputChange} />

      {isDirty.name && errors.name ? (
      <Box variant="h6" color="red">
        {errors.name}
      </Box >
      ) : null}

    <TextField
      sx={{ marginTop: '8px' }}
      name="surname"
      label="Surname"
      variant="outlined"
      fullWidth
      value={user.surname}
      onChange={onInputChange} />

      {isDirty.surname && errors.surname ? (
      <Box variant="h6" color="red">
        {errors.surname}
      </Box >
      ) : null}

    <TextField
      sx={{ marginTop: '8px' }}
      name="email"
      label="Email"
      variant="outlined"
      fullWidth
      value={user.email}
      onChange={onInputChange} />

      {isDirty.email&&errors.email?(
    <Box variant="h6" color="red">
        {errors.email}
    </Box>
      ) : null}

    <Button
      disabled={!isValid()}
      sx={{ marginTop: '8px' }}
      type="submit"
      color="primary"
      variant="contained"
      startIcon={<SaveAsOutlinedIcon/>}
    >
      Save
    </Button>
    <Button
      sx={{ marginTop: '8px' }}
      to=".."
      component={NavLink}
      startIcon={<CancelOutlinedIcon/>}
    >
      Cancel
    </Button>
    </form>
  </Paper>
}

export default UserForm