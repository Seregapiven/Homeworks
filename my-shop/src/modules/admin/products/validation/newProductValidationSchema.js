import * as yup from 'yup';

export default yup.object().shape({
    title: yup.string().required().min(3).label('Product Name'),
    price: yup.number().required().min(2).label('Price'),
    description: yup.string().label('Description'),
    categoryId:yup.string().required().label('Category')
});