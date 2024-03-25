import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4 lg:my-10">
      {/* TODO: products will be mapped here */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      {/* Product 1 Start  */}

      {/* Product 1 End  */}
    </div>
  );
};

export default ProductList;
