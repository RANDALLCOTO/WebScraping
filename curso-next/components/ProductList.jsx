"use client";
import React from 'react'
import HorizontalCardList from './HorizontalCardList';
import HorizontalCardListLoading from './HorizontalCardListLoading';
import MobileProductCard from './MobileProductCard';
import MobileHorizontalCardList from './MobileHorizontalCardList';

const ProductList = ({data, loading}) => {
  return (
    <>
        <div className='container mx-auto hidden lg:block '>
                {data.map(element => (
                  element.companyProducts?.length > 0 && <HorizontalCardList companyProducts={element.companyProducts} companyName={element.companyName} companyLogo={element.companyLogo}/>
                ))
                }
                {loading && <HorizontalCardListLoading/>}
        </div>
        <div className='container mx-auto block lg:hidden '>
        {data.map(element => (
          <MobileHorizontalCardList productList={element.companyProducts} />
        ))
        }
        {loading && <HorizontalCardListLoading/>}
    </div>
  </>
  )
}

export default ProductList;