'use client';

import { products } from '@/app/data/products';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryList = () => {
  const pathname = usePathname();

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="flex items-center justify-between w-full my-10 lg:block lg:w-2/12 lg:my-0 lg:mt-4">
      <Link
        href={`/category/all-products`}
        scroll={false}
        className={`${
          pathname === `/category/all-products`
            ? 'text-[#00D991] font-semibold'
            : ''
        }`}
      >
        <button className="box-border block h-6 mt-4 border-black hover:border-b">
          All
        </button>
      </Link>

      {uniqueCategories.map((category) => (
        <Link
          href={`/category/${category}`}
          scroll={false}
          key={category}
          className={`${
            pathname === `/category/${category}`
              ? 'text-[#00D991] font-semibold'
              : ''
          }`}
        >
          <button className="box-border block h-6 mt-5 capitalize border-black hover:border-b">
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
