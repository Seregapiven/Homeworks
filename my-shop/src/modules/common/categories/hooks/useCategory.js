import useCategoriesList from './useCategoriesList';

export default function useCategory(id) {
    const list = useCategoriesList();

    return list.find((item) => item.id === id);
}