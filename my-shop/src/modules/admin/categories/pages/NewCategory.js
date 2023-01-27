import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import { Form, Formik } from 'formik';

import FormTextField from '../../../common/form/FormTextField';
import React from 'react';
import newCategoryValidationSchema from '../validation/newCategoryValidationSchema';
import useCategories from '../../../common/categories/hooks/useCategories';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    title: '',
};

function NewCategory() {
    const navigate = useNavigate();
    const { createCategory } = useCategories();

    function handleClose() {
        navigate('..');
    }

    function handleSubmit(values) {
        createCategory(values).then(handleClose);
    }
    return (
        <Dialog open={true} onClose={handleClose}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={newCategoryValidationSchema}
            >
                <Form>
                    <DialogTitle>New Category</DialogTitle>
                    <DialogContent>
                        <FormTextField
                            autoFocus
                            margin="dense"
                            name="title"
                            label="Category Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
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

export default NewCategory;