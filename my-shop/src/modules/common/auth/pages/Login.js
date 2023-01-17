import { Form, Formik } from 'formik';
import React from 'react';
import { Navigate } from 'react-router-dom';
import loginValidationSchema from '../validation/loginValidationSchema';
import useAuth from '../hooks/useAuth';
import FormTextField from '../../components/form/FormTextField'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
            {({ isValid }) =>
            (
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Login
                            </Typography>
                            <Form>
                                {auth.isAuthorized && <Navigate to="/" />}
                                <FormTextField  name="username" label="Name" fullWidth />
                                <br />
                                <FormTextField name="password" label="Password" fullWidth />
                                <br />
                            <FormTextField name="role" label="Role" fullWidth />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            </Form>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                </Container>
    )
}
        </Formik>
    );
}

export default Login;