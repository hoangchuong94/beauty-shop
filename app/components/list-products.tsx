import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import product1 from '/public/products/product-1.jpg';
import product2 from '/public/products/product-2.jpg';
import product3 from '/public/products/product-3.jpg';
import product4 from '/public/products/product-4.jpg';

const Products = () => {
  const listProduct = [
    {
      id: 1,
      image: product1,
      name: 'product name 1',
      description: 'product description',
    },
    {
      id: 2,
      image: product2,
      name: 'product name 1',
      description: 'product description',
    },
    {
      id: 3,
      image: product3,
      name: 'product name 1',
      description: 'product description',
    },
    {
      id: 4,
      image: product4,
      name: 'product name 1',
      description: 'product description',
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {listProduct.map((product) => (
        <div key={product.id} className="relative flex flex-col">
          <div className="absolute left-2 top-2 rounded-2xl bg-white px-4 shadow-md">
            <span>Sale !</span>
          </div>
          <div>
            <Link href={'/products'}>
              <Image src={product.image} alt="image product" />
            </Link>
          </div>
          <div>
            <div></div>
            <h1>{product.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
