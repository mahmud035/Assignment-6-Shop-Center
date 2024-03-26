import Link from 'next/link';

const ProductCard = ({ product }) => {
  const { id, title, description, category, thumbnail } = product;

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
      ></div>
      <h2 className="mt-2 text-sm lg:text-base">
        <Link href={`/products/${id}`} className="text-base font-bold">
          {title}{' '}
        </Link>
        <span className="text-[#919090] capitalize">
          <Link href={`/category/${category}`}>({category})</Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm">{description.slice(0, 35)}...</p>

      <p className="mt-4 text-sm text-rose-600">
        <span className="text-[#919090] line-through">$205.00</span> $195.00
      </p>
    </div>
  );
};

export default ProductCard;
