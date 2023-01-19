import { Form, Formik } from 'formik';
import React from 'react';
import { Navigate } from 'react-router-dom';
import loginValidationSchema from '../validation/loginValidationSchema';
import useAuth from '../hooks/useAuth';
import FormTextField from '../../components/form/FormTextField';
import SelectRole from '../../components/form/SelectRole';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const initialValues = { username: '', password: '', role: 'admin' };

function Login() {
    const auth = useAuth();

    function onSubmit(values) {
        auth.login(values.username, values.password, values.role);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}
        >
                <Form>
                    {auth.isAuthorized && <Navigate to="/" />}
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',    
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <FormTextField
                            name="username"
                            label="Name" />
                        <FormTextField name="password" label="Password" />
                        <SelectRole name="role" fullWidth label="Role" id="role">
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                        </SelectRole>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>

                    </Box>
                </Form>
        </Formik>
    );
}

export default Login;