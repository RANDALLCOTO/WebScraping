import React from 'react'
import { ProductCard } from './ProductCard';

const ProductList = ({categories}) => {
  return (
    <>
    {categories.map((element, index) => (
        <div key={index} className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">{element.title}</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
            </div>
        </div>
    ))}
    </>
  )
}

export default ProductList;