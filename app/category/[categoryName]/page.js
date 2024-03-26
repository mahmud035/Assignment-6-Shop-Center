import ProductCard from '@/app/components/home/ProductCard';
import { products } from '@/app/data/products';

export const generateMetadata = ({ params: { categoryName } }) => {
  const capitalizedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return {
    title: `Category: ${capitalizedCategoryName} | ShopCenter`,
  };
};

export const generateStaticParams = () => {
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return uniqueCategories.map((categoryName) => ({
    categoryName: categoryName,
  }));
};

const CategoryPage = ({ params: { categoryName } }) => {
  const selectedCategoryProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
      {categoryName === 'all-products' ? (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <>
          {selectedCategoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryPage;
