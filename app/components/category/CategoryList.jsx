'use client';

import { getUniqueCategories } from '@/app/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryList = () => {
  const pathname = usePathname();
  const uniqueCategories = getUniqueCategories();

  return (
    <div className="flex flex-col items-center justify-between w-full gap-6 my-10 sm:flex-row lg:block lg:w-2/12 lg:my-0 lg:mt-4">
      <button
        className={`box-border block w-4/5 h-10 pl-2 mt-4 text-center bg-gray-200 rounded cursor-pointer sm:text-left hover:bg-emerald-100 ${
          pathname === `/category/all-products`
            ? 'bg-emerald-400 font-bold text-white hover:bg-emerald-400'
            : ''
        }`}
      >
        <Link
          href={`/category/all-products`}
          scroll={false}
          className="block w-full"
        >
          All
        </Link>
      </button>

      {uniqueCategories.map((category) => (
        <button
          key={category}
          className={`box-border block w-4/5 h-10 pl-2 mt-5 text-center capitalize bg-gray-200 rounded sm:text-left hover:bg-emerald-100 ${
            pathname === `/category/${category}`
              ? 'bg-emerald-400 font-bold text-white hover:bg-emerald-400'
              : ''
          }`}
        >
          <Link
            href={`/category/${category}`}
            scroll={false}
            className="block w-full"
          >
            {category}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
