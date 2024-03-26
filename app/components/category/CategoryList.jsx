'use client';

import { getUniqueCategories } from '@/app/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryList = () => {
  const pathname = usePathname();
  const uniqueCategories = getUniqueCategories();

  return (
    <div className="flex flex-col items-center justify-between w-full my-10 sm:flex-row lg:block lg:w-2/12 lg:my-0 lg:mt-4">
      <Link
        href={`/category/all-products`}
        scroll={false}
        className={`${
          pathname === `/category/all-products`
            ? 'text-[#00D991] font-bold transition-all'
            : ''
        }`}
      >
        <button className="box-border block h-6 mt-4 hover:border-b hover:border-[#00D991]">
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
              ? 'text-[#00D991] font-bold transition-all'
              : ''
          }`}
        >
          <button className="box-border block h-6 mt-5 capitalize hover:border-b hover:border-[#00D991]">
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
