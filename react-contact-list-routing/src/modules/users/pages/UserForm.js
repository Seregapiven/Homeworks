import { Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import useUser from '../hooks/useUser';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function UserForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { user, saveUser } = useUser(id);

  const [values, setValues] = useState(user);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setValues(user);
    validate(user);
      setTouched({});
  }, [user]);


  function onInputChange(e) {

    const newValues = { ...values, [e.target.name]: e.target.value };

    setValues(newValues);

    validate(newValues);
  }

  function onInputBlur(e) {
    setTouched({ ...touched, [e.target.name]: true });
  }

  function validate(values){
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.surname) {
    errors.surname = 'Surname is required';
  }

  if (!values.email.toLowerCase().match(EMAIL_REGEXP)) {
    errors.email = 'Email is Invalid';
  }

  if (!values.email) {
    errors.email = 'Email is required';
    }

  setIsValid(!Object.keys(errors).length);
  setErrors(errors);
}


  function onFormSubmit(e) {
    e.preventDefault();

    saveUser(values).then(() => navigate('..'))
  }

  return <Paper sx={{ marginTop: '20px' }}>
    <form onSubmit={onFormSubmit}>
      <TextField
        error={touched.name && !!errors.name}
        helperText={touched.name ? errors.name: null}
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
        value={values.name}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
      <TextField
        error={touched.surname && !!errors.surname}
        helperText={touched.surname ? errors.surname: null}
        sx={{ marginTop: '8px' }}
        name="surname"
        label="Surname"
        variant="outlined"
        fullWidth
        value={values.surname}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
      <TextField
        error={touched.email && !!errors.email}
        helperText={touched.email ? errors.email: null}
        sx={{ marginTop: '8px' }}
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={values.email}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
    <Button
      disabled={!isValid}
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