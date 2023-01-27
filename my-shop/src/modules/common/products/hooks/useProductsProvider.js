import { useEffect, useState } from 'react';

import api from '../../../../api';

export default function useProductsProvider() {
    const [list, setList] = useState([]);

    function fetchProducts() {
        return api.get('products').then(({ data }) => setList(data));
    }

    function removeProduct(id) {
        return api.delete('products/' + id).then(fetchProducts);
    }

    function createProduct(newProduct) {
        return api.post('products', newProduct).then(fetchProducts);
    }

    function updateProduct(updatedProduct) {
        return api
            .put('products/' + updatedProduct.id, updatedProduct)
            .then(fetchProducts);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        list,
        removeProduct,
        createProduct,
        updateProduct,
    };
}