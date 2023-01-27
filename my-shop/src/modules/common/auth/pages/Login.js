import { Form, Formik } from 'formik';
import React from 'react';
import { Navigate } from 'react-router-dom';
import loginValidationSchema from '../validation/loginValidationSchema';
import useAuth from '../hooks/useAuth';
import FormTextField from '../../form/FormTextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import api from '../../../../api';

const initialValues = { username: '', password: ''};

function Login() {
    const auth = useAuth();

    function onSubmit(values, meta) {
        console.log('submiting', values, meta);
        auth.login(values.username, values.password).catch((error) => {
            if (error.response.status >= 400 && error.response.status < 500) {
                meta.setErrors({
                    password: error.response.data.error,
                });
            }
        });
    };

    function simulateError() {
        api.get('error', {
            headers: {
                Authorization: 'Bearer 123',
            },
        });
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}
        >
                <Form>
                    {auth.isAuthorized && <Navigate replace={true} to="/" />}
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={simulateError}
                    >
                        Error
                    </Button>

                    </Box>
                </Form>
        </Formik>
    );
}

export default Login;