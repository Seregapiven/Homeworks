import useCategory from '../../../common/categories/hooks/useCategory';

function CategoryName({ id }) {
  const category = useCategory(id);

  return category ? category.title : 'unknown';
}

export default CategoryName;