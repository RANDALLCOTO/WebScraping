"use client";
import React from 'react'
import HorizontalCardList from './HorizontalCardList';
import HorizontalCardListLoading from './HorizontalCardListLoading';

const ProductList = ({data, loading}) => {
  return (
    <div className='container mx/auto'>
            {data.map(element => (
              element.companyProducts?.length > 0 && <HorizontalCardList companyProducts={element.companyProducts} companyName={element.companyName} companyLogo={element.companyLogo}/>
            ))
            }
            {loading && <HorizontalCardListLoading/>}
    </div>
  )
}

export default ProductList;