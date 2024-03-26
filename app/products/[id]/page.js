import { products } from '@/app/data/products';
import Image from 'next/image';
import Link from 'next/link';
import StarIcon from '../../../public/assets/svg/star.svg';

export const metadata = {
  title: 'ShopCenter | Product Details',
  description: 'ShopCenter product details page description',
};

export const generateStaticParams = () => {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
};

const ProductDetailsPage = ({ params }) => {
  const { id } = params;
  const product = products.find((product) => product.id.toString() === id);
  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    thumbnail,
    images,
  } = product || {};

  const numberOfStar = Math.round(rating);
  const starArray = Array(numberOfStar).fill(0);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="flex flex-col items-center justify-between w-11/12 gap-12 mx-auto lg:w-8/12 max-w-7xl lg:flex-row">
          <div className="w-full p-4 border lg:w-7/12 border-slate-500/20">
            <Image
              src={thumbnail}
              width={400}
              height={500}
              priority={true}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt="Product Thumbnail"
            />

            <div className="flex gap-4 mt-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={100}
                  height={100}
                  priority={true}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt="Product Grid Image"
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="font-serif text-xl italic font-semibold lg:text-3xl">
              {title}
            </h1>
            <span className="text-[#919090] my-3 capitalize">
              <Link href={`/category/${category}`}>{category}</Link>
            </span>
            <div className="flex items-center justify-start gap-1 mt-3">
              {starArray.map((_, index) => (
                <Image key={index} src={StarIcon} width={20} alt="Star Icon" />
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="line-through text-rose-600 opacity-60">
                  ${price}&nbsp;&nbsp;
                </span>
                <span className="text-2xl font-bold">
                  {' '}
                  ${discountPercentage}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>
              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${discountPercentage}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
