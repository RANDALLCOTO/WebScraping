"use client";
import React, { useEffect, useState } from 'react';
import { getSession, signIn } from "next-auth/react";
import Loading from '@app/loading';
import StoreCarouselMaintenance from '@components/StoreCarouselMaintenance';

const CarouselConfiguration = ({params}) => {
    const [loading, setLoading]  =  useState(true);

    useEffect(() => {
      const securePage = async () => {
        const session = await getSession();
        if (!session) {
          signIn();
          
        } else {
          setLoading(false);
        }
      };
      securePage();
    }, []);

    if(loading)
      return <Loading />

  return (
   <StoreCarouselMaintenance params={params}/>
  )
}

export default CarouselConfiguration;
