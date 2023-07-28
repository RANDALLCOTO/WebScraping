"use client"
import CategoryCardList from '@components/customerStore/CategoryCardList';
import ImageSlider from '@components/customerStore/ImageSlider';
import ProductList from '@components/customerStore/ProductList';
import StoreFooter from '@components/customerStore/StoreFooter';
import StoreNav from '@components/customerStore/StoreNav';
import WSCard from '@components/customerStore/WSCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'



const StorePreview = ({params}) => {
const [storeData, setStoreData] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/api/store/64a3b2aea00590db17e572a5/get-full-store");
        setStoreData(data.data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setStoreData({});
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
  <div className='relative w-full !bg-gradient-to-r from-white from-10% via-pink-100 via-20% to-pink-100 to-80%'>
    {!loading&& <StoreNav store={storeData.store} mode="EDIT"/>}
    {!loading&& <ImageSlider mode="EDIT"/>}
    {!loading&& <CategoryCardList mode="EDIT" store={params.store} categories={storeData.categories}/>}
    {!loading&& <ProductList mode="EDIT" categories={storeData.categories}/>}
    {!loading&& <StoreFooter mode="EDIT" store = {storeData.store}/>}
    {!loading&&  <WSCard store={storeData.store}/>}
  </div>
    )
}

export default StorePreview;