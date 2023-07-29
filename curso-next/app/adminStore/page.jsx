"use client"
import StoreItemCard from '@components/StoreItemCard';
import React, {useEffect, useState} from 'react';
import { getSession, signIn } from 'next-auth/react';
import Loading from '@app/loading';


const AdminStore =  () => {
    const  [user, setUser]  =  useState(null);
    const [loading, setLoading]  =  useState(true);
    const itemStoreInfo = [
      {
          itemImage:"https://www.bluehost.com/blog/wp-content/uploads/2022/02/How-to-create-an-online-store-with-WooCommerce.png",
          itemTitle:"Tienda - Información General",
          itemDescription:"Configura aspectos iniciales de tu tienda",
          itemLink:"/store"
      },
      {
        itemImage:"https://www.creativosonline.org/wp-content/uploads/2018/01/carrusel-react.jpg",
        itemTitle:"Tienda - Carousel de Imágenes",
        itemDescription:"Configura las categorias de tu tienda",
        itemLink:"/store/carousel/maintenance/rcotojimenez@gmail.com/NEW"
      },
      {
        itemImage:"https://www.hostgator.com/blog/wp-content/uploads/2019/01/Create-product-categories-for-your-online-store.png",
        itemTitle:"Tienda - Configurar Categorias",
        itemDescription:"Configura las categorias de tu tienda",
        itemLink:"/store/category/maintenance/rcotojimenez@gmail.com/NEW"
      },
      {
          itemImage:"https://www.identixweb.com/wp-content/uploads/2022/01/Add-Customization-for-Custom-Products.png",
          itemTitle:"Tienda - Configurar Productos",
          itemDescription:"Configura aspectos iniciales de tu tienda",
          itemLink:"/store/product/maintenance/rcotojimenez@gmail.com/NEW"
      },
      {
          itemImage:"https://www.clio.com/wp-content/uploads/2021/10/lawyer-payment-methods.png",
          itemTitle:"Previsualizar mi tienda",
          itemDescription:"",
          itemLink:`/store/tiendaPatito/preview`
      }
  ];
    useEffect(()=>{
      const securePage = async ()=>{
          const session = await getSession();
          if(!session){
            signIn();
          }else{
            setUser(session.user.email);
            setLoading(false);
          }
      }
      securePage();
    }, 
    []);

    if(loading)
      return <Loading/>
    
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-3 md:p-4 xl:p-5">
      {itemStoreInfo.map(element=> (
           <StoreItemCard key={element.itemTitle} itemStoreInfo={element}/>
      ))}
   </div>)
}

export default AdminStore;
