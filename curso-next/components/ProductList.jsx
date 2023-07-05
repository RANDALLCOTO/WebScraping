import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({data}) => {
  return (
    <div className='container mx/auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((product)=>(
              <ProductCard product={product} />
            ))}
        </div>
    </div>
  )
}

export default ProductList;