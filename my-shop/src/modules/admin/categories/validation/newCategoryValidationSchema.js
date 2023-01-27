import * as yup from 'yup';

export default yup.object().shape({
    title: yup.string().required().min(3).label('Category Name'),
});