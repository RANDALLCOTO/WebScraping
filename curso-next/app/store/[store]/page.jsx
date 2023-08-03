"use client"
import CategoryCardList from '@components/customerStore/CategoryCardList';
import ColorScheme from '@components/customerStore/ColorScheme';
import ImageSlider from '@components/customerStore/ImageSlider';
import ProductList from '@components/customerStore/ProductList';
import StoreFooter from '@components/customerStore/StoreFooter';
import StoreNav from '@components/customerStore/StoreNav';
import WSCard from '@components/customerStore/WSCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'



const UserStore = ({params}) => {
const [storeData, setStoreData] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/api/store/64a3b2aea00590db17e572a5/get-full-store");
        setStoreData(data.data);
        console.log(data.data);
        setLoading(false);
      } catch (error) {
        setStoreData({});
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
  /*<div className='relative w-full !bg-gradient-to-r from-white via-purple-100 to-pink-200'>
    {!loading&& <StoreNav store={storeData.store} mode="ONLINE"/>}
    {!loading&& <ImageSlider store = {params.store} mode="ONLINE" images={storeData.carousel}/>}
    {!loading&& <CategoryCardList mode="ONLINE" store={params.store} categories={storeData.categories}/>}
    {!loading&& <ProductList mode="ONLINE" store = {params.store} categories={storeData.categories}/>}
    {!loading&& <StoreFooter mode="ONLINE" store = {storeData.store}/>}
    {!loading&&  <WSCard store={storeData.store}/>}
  </div>*/
  <ColorScheme currentColor="white"/>
    )
}

export default UserStore;