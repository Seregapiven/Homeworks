import useProductsList from './useProductsList';

const EMPTY_PRODUCT = {
    title: '',
    price: 0,
    description: 0,
    categoryId: '',
};

export default function useProduct(id) {
    const list = useProductsList();

    return list.find((item) => item.id === id) || EMPTY_PRODUCT;
};