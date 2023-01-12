import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

function FormTextField({ name, ...restProps }) {
  const [{ value, onBlur, onChange }, {touched, error}] = useField(name);

  return <TextField
    error={touched && !!error}
    helperText={touched ? error : null}
    name={name}
    {...restProps}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />;
}

export default FormTextField;