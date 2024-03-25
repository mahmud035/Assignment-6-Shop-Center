import { homeProductsData } from '@/app/data/homeProductsData';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4 lg:my-10">
      {homeProductsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
