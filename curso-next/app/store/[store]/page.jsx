import CategoryCardList from '@components/customerStore/CategoryCardList';
import React from 'react'
import StoreFooter from '@components/customerStore/StoreFooter';

const UserStore = ({params}) => {
  return (
    <>
      <CategoryCardList mode="ONLINE" store={params.store}/>
      <ProductList/>
      <StoreFooter />
    </>
  )
}

export default UserStore;