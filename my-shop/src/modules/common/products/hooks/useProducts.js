import { ProductsContext } from '../providers/ProductsProvider';
import { useContext } from 'react';

export default function useProducts() {
    const value = useContext(ProductsContext);

    if (value === null) {
        throw new Error('You should wrap you react tree in ProductsProvider');
    }

    return value;
}