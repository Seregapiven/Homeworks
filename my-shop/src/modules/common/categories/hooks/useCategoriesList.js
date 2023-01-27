import useCategories from './useCategories';

export default function useCategoriesList() {
    const { list } = useCategories();

    return list;
}