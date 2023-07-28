import React from 'react'
import { ProductCard } from './ProductCard';

const ProductList = ({categories}) => {
  return (
    <div div className='mr-2 ml-2 lg:mr-8 lg:ml-8'>
    {categories.filter((element)=>element.categoryProducts.length>0).map((element, index) => (
        <div key={index} className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">{element.categoryInfo.name}</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {element.categoryProducts.map((product)=>(
                      <ProductCard product={product}/>
                    ))}
            </div>
        </div>
    ))}
    </div>
  )
}

export default ProductList;