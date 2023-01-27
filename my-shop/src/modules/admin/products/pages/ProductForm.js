import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem
} from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import FormTextField from '../../../common/form/FormTextField';
import MySelect from '../../../common/form/MySelect';

import newProductValidationSchema from '../validation/newProductValidationSchema';
import useProducts from '../../../common/products/hooks/useProducts';
import useProduct from '../../../common/products/hooks/useProduct';
import useCategoriesList from '../../../common/categories/hooks/useCategoriesList';


import { useNavigate, useParams } from 'react-router-dom';


function ProductForm() {
    const { createProduct, updateProduct } = useProducts();
    const categories = useCategoriesList();
    const { id } = useParams();
    const navigate = useNavigate();
    const product = useProduct(+id);

    function onSubmit(values) {
        save(values).then(() => {
            navigate('../');
        });
    }

    function save(product) {
        if (product.id) {
            return updateProduct(product);
        } else {
            return createProduct(product);
        }
    }

    function handleClose() {
        navigate('..');
    }

    return (
        <Dialog open={true} onClose={handleClose}>
            <Formik
                initialValues={product}
                enableReinitialize onSubmit={onSubmit}
                validationSchema={newProductValidationSchema}
            >
                <Form>
                    <DialogTitle>Product form</DialogTitle>
                    <DialogContent>
                        <FormTextField
                            autoFocus
                            margin="dense"
                            name="title"
                            label="Product Name"
                            type="text"
                            variant="standard"
                        />
                            <FormTextField
                            autoFocus
                            margin="dense"
                            name="price"
                            label="Price"
                            type="number"
                            variant="standard"
                        />
                            <FormTextField
                            autoFocus
                            margin="dense"
                            name="description"
                            label="Description"
                            type="textarea"
                            variant="standard"
                        />
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="categoryId">Category</InputLabel>
                            <MySelect
                                name="categoryId"
                                label="categoryId"
                            >
                                {categories.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.title}
                                    </MenuItem>
                                ))};
                            </MySelect>
                            </FormControl>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </Form>
            </Formik>
        </Dialog>
    );
}

export default ProductForm;