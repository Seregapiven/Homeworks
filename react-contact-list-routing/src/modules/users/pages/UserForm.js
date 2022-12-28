import { Button, Paper, TextField,Typography, Box } from '@mui/material';
import   {useState,useEffect} from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// eslint-disable-next-line
const EMAIL_REGEXP=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function UserForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const {user, changeUser, saveUser } = useUser(id);
  const [isDirty,setIsDirty]=useState({
    name:false,
    surname:false,
    email:false,
  });
  const[errors,SetErrors]=useState({})

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

function validate(target){
const newErrors={}
  if (target.name === '') {
    newErrors.name = 'Name is required';
  }
  if (target.surname === '') {
    newErrors.surname = 'Surname is required';
  }
  if (target.email === '') {
     newErrors.email = 'Email is required';
  }
  if (!EMAIL_REGEXP.test(target.email)) {
    newErrors.email = 'Email is Invalid';
 }
  return newErrors;
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
    {isDirty.name&&errors.name?(
      <Box variant="h6" color="red">
        {errors.name}
      </Box >
    ):null}
    <TextField
      sx={{ marginTop: '8px' }}
      name="surname"
      label="Surname"
      variant="outlined"
      fullWidth
      value={user.surname}
      onChange={onInputChange} />
       {isDirty.surname&&errors.surname?(
     <Box variant="h6" color="red">
        {errors.surname}
      </Box >
    ):null}
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
    ):null}
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