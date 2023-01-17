import * as yup from 'yup';

export default yup.object().shape({
    username: yup.string().required().min(3).label('Name'),
    password: yup.string().required('Put a password').min(8, 'Min 8 symbol'),
});