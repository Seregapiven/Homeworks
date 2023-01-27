import { useEffect, useState } from 'react';

import api from '../../../../api';

export default function useCategoriesProvider() {
    const [list, setList] = useState([]);

    function fetchCategories() {
        return api.get('categories').then(({ data }) => setList(data));
    }

    function removeCategory(id) {
        return api.delete('categories/' + id).then(fetchCategories);
    }

    function createCategory(newCategory) {
        return api.post('categories', newCategory).then(fetchCategories);
    }

    function updateCategory(updatedCategory) {
        return api
            .delete('categories/' + updatedCategory.id, updatedCategory)
            .then(fetchCategories);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return {
        list,
        removeCategory,
        createCategory,
        updateCategory,
    };
}