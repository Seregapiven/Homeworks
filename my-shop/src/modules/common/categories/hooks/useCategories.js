import { CategoriesContext } from '../providers/CategoriesProvider';
import { useContext } from 'react';

export default function useCategories() {
    const value = useContext(CategoriesContext);

    if (value === null) {
        throw new Error('You should wrap you react tree in CategoriesProvider');
    }

    return value;
}