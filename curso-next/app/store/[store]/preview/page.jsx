"use client"
import CategoryCardList from '@components/customerStore/CategoryCardList';
import ImageSlider from '@components/customerStore/ImageSlider';
import ProductList from '@components/customerStore/ProductList';
import StoreFooter from '@components/customerStore/StoreFooter';
import StoreNav from '@components/customerStore/StoreNav';
import VerticalNav from '@components/customerStore/VerticalNav';
import WSCard from '@components/customerStore/WSCard';
import axios from 'axios';
import {IoSettingsSharp} from 'react-icons/io5'
import React, { useEffect, useState } from 'react'

const storeInitialValue = {
  pageMainBackGround:{
    from:"pink-200",
    via:"green-200",
    to:"black",
    transition:"bbg-gradient-to-bl"
  },
  pageProductBackGround:{
    bg:'black',
    text:'white',
    price:'white',
    icon:'blue-400',
    iconLine:'white'
  },
  pageCategoryBackGround:{
    title:'black',
    description:'pink-200',
    btnPrimary:'red-200',
    btnPrimaryBG:'black',
    btnSecondary:'green-500'
  },
  pageCarouselBackGround:{
    description:'white'
  } 
}

const StorePreview = ({params}) => {
const [loading, setLoading] = useState(true);
const [storeData, setStoreData] = useState(null);
const [storeConfig, setStoreConfig] = useState(storeInitialValue);
const [showConfigNav, setShowConfigNav] = useState(true);

const onExecuteAction = (section, type, value)=>{
  switch (section){
    case 'page-bg':
      setPageBackGround(type, value);
      break;
    case 'product-bg' :
      setProductBackground(type, value);
      break; 
    case 'category-bg':
      setCategoryBackground(type, value);  
      break; 
    case 'carousel-bg':
      setPageCarouselBackground(type, value);  
      break;   
  }
}

const closeNav = ()=>{
  setShowConfigNav(false);
}

const setPageBackGround = (type, value)=>{
  let storeBackGround = storeConfig.pageMainBackGround;
  switch (type) {
    case 'bg-store-primary':
        storeBackGround.from = value;
        break;
    case 'bg-store-intermediate':
        storeBackGround.via = value;
        break;
    case 'bg-store-secondary':
      storeBackGround.to = value;
      break;  
    case 'bg-store-transition':
      storeBackGround.transition = value;
      break;     
    default:
        break;  
}
  setStoreConfig({...storeConfig, storeBackGround});
}

const setPageCarouselBackground = (type, value)=>{
  let pageCarouselBackGround = storeConfig.pageCarouselBackGround;
  switch (type) {
    case 'description-carousel-primary':
        pageCarouselBackGround.description = value;
        break;    
    default:
        break;  
}
  setStoreConfig({...storeConfig, pageCarouselBackGround});
}

const setProductBackground = (type, value)=>{
  let pageProductBackGround = storeConfig.pageProductBackGround;
  switch (type) {
    case 'bg-product-primary':
      pageProductBackGround.bg = value;
        break;
    case 'text-product-primary':
      pageProductBackGround.text = value;
        break;   
    case 'price-product-primary':
      pageProductBackGround.price = value;
      break; 
    case 'icon-product-primary':
      pageProductBackGround.icon = value;
      break; 
    case 'iconLine-product-primary':
      pageProductBackGround.iconLine = value;
      break;                        
    default:
        break;  
}
  setStoreConfig({...storeConfig, pageProductBackGround});
}

const setCategoryBackground = (type, value)=>{
  let pageCategoryBackGround = storeConfig.pageCategoryBackGround;
  switch (type) {
    case 'title-category-primary':
      pageCategoryBackGround.title = value;
        break;
    case 'description-category-primary':
      pageCategoryBackGround.description = value;
        break;   
    case 'btnPrimary-category-primary':
      pageCategoryBackGround.btnPrimary = value;
      break; 
    case 'btnSecondary-category-primary':
      pageCategoryBackGround.btnSecondary = value;
      break;  
    case 'btnPrimaryBG-category-primary':
      pageCategoryBackGround.btnPrimaryBG = value;                        
    default:
        break;  
}
  setStoreConfig({...storeConfig, pageCategoryBackGround});
}

  useEffect(()=> {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/api/store/64a3b2aea00590db17e572a5/get-full-store");
        setStoreData(data.data);
        
        //console.log(data.data);
        setLoading(false);
      } catch (error) {
        setStoreData({});
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className={`relative ml-[20rem] lg:ml-[${showConfigNav?"20rem":"0rem"}] w-full min-h-full ${storeConfig.pageMainBackGround.transition} bfrom-${storeConfig.pageMainBackGround.from} bvia-${storeConfig.pageMainBackGround.via} bto-${storeConfig.pageMainBackGround.to} `}>
      {!loading&& <StoreNav store={storeData.store} mode="EDIT"/>}
      {!loading&& <ImageSlider carouselUIConfig={storeConfig.pageCarouselBackGround} store = {params.store} mode="EDIT" images={storeData.carousel}/>}
      {!loading&& <CategoryCardList categoryUIConfig={storeConfig.pageCategoryBackGround} mode="EDIT" store={params.store} categories={storeData.categories}/>}
      {!loading&& <ProductList productUIConfig={storeConfig.pageProductBackGround} mode="EDIT" store = {params.store} categories={storeData.categories}/>}
      {!loading&& <StoreFooter mode="EDIT" store = {storeData.store}/>}
      {!loading&& showConfigNav && <VerticalNav closeNav={closeNav} mode="EDIT" storeConfig = {storeConfig} parentCallBack={onExecuteAction}/>  }
      {!loading&& !showConfigNav && <IoSettingsSharp className='w-16 h-16 fixed bottom-2 left-2 z-50' color='gray' onClick={()=>{setShowConfigNav(true)}}/>  }
    </div>

    /*
  <div className={`relative w-full !bg-gradient-to-r bfrom-${bgPrimary} bvia-${bgIntermediate} bto-${bgSecondary}`}>
    {!loading&& <StoreNav store={storeData.store} mode="EDIT"/>}
    {!loading&& <ImageSlider store = {params.store} mode="EDIT" images={storeData.carousel}/>}
    {!loading&& <CategoryCardList mode="EDIT" store={params.store} categories={storeData.categories}/>}
    {!loading&& <ProductList mode="EDIT" store = {params.store} categories={storeData.categories}/>}
    {!loading&& <StoreFooter mode="EDIT" store = {storeData.store}/>}
    {!loading&& <VerticalNav mode="EDIT" storeConfig = {storeConfig} parentCallBack={onSelectedColor}/> }
  </div>*/
    )
}

export default StorePreview;