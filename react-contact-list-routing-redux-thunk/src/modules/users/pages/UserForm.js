import { Button, Paper,} from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import useUser from '../hooks/useUser';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import {Form, Formik } from 'formik';
import FormTextField from '../../common/components/form/FormTextField';

const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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

    return errors;
}

function UserForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { user, saveUser } = useUser(id);

  function onFormSubmit(values) {
        saveUser(values);
        navigate('..');
    }

  return <Paper sx={{ marginTop: '20px' }}>
    <Formik
      initialValues={user}
      enableReinitialize={true}
      validateOnMount={true}
      onSubmit={onFormSubmit}
      validate={validate}
    >
      {({isValid}) => (
        <Form>
          <FormTextField name="name" label="Name" fullWidth />
          <FormTextField name="surname" label="Surname" fullWidth/>
          <FormTextField name="email" label="Email" fullWidth/>

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
    </Form>
      )}
    </Formik>
  </Paper>
}

export default UserForm;