import React from 'react';
import { createContext } from 'react';
import useProductsProvider from '../hooks/useProductsProvider';

export const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
    const value = useProductsProvider();

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;