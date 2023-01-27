import useProducts from './useProducts';

export default function useProductsList() {
    const { list } = useProducts();
    return list;
};