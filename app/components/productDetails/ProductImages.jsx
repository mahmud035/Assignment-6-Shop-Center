'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductImages = ({ product }) => {
  const { thumbnail, images } = product || {};
  const [productThumbnail, setProductThumbnail] = useState(thumbnail);

  return (
    <div className="w-full p-4 border lg:w-7/12 border-slate-500/20">
      <Image
        src={productThumbnail}
        width={400}
        height={500}
        priority={true}
        className="w-[400px] h-[500px] mx-auto object-cover cursor-pointer transition-all hover:scale-105"
        alt="Product Thumbnail"
      />

      <div className="flex gap-4 mt-5">
        {images.map((image, index) => (
          <Image
            onClick={() => setProductThumbnail(image)}
            key={index}
            src={image}
            width={100}
            height={100}
            priority={true}
            className="w-[100px] h-[100px] mx-auto border hover:scale-110 transition-all object-cover cursor-pointer "
            alt="Product Grid Image"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
