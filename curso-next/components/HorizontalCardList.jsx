"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const HorizontalCardList = ({ companyProducts, companyName, companyLogo }) => {
  const parentHTML = useRef(null);
  const [scrollInterval, setScrollInterval] = useState(null);
  const [scrollToLeft, setScrollToLeft] = useState(true);
  const [scrollToRight, setScrollToRight] = useState(true);

  const sideScroll = (direction, speed, distance, step) => {
    let scrollAmount = 0;
    setScrollInterval(
      setInterval(function () {
        if (direction == "left") {
          parentHTML.current.scrollLeft -= step;
        } else {
          parentHTML.current.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
          console.log('sdf');
          window.clearInterval(scrollInterval);
        }
      }, speed)
    );
  };

  const stopInterval = () => {
    window.clearInterval(scrollInterval);
   validateScroll();
  };

  const validateScroll = ()=>{
    setScrollToLeft(Math.ceil(parentHTML?.current?.scrollLeft) < 50);
    setScrollToRight(Math.abs(Math.ceil(parentHTML?.current?.scrollLeft) - Math.ceil(parentHTML?.current?.scrollWidth - parentHTML?.current?.clientWidth)) <=1);
  }

  useEffect(()=>{
      validateScroll();
  }, []);


  return (
    <div className="flex bg-white mb-6 flex-col m-auto p-auto  relative">
      <div className="absolute right-3 bottom-3">
        <img src={companyLogo} alt="" width={150}/>
      </div>
      <div className={`sm:flex hidden ${scrollToLeft?'lg:hidden':''} absolute top-1/2 z-40 left-3`}>
        <button  className="rounded-full h-10 w-10 flex items-center justify-center bg-black"
          onMouseUp={() => {
            stopInterval();
          }}
          onMouseDown={() => {
            sideScroll("left", 5, 10, 10);
          }}
        >
          <svg
            class="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </button>
      </div>
      <div className={`sm:flex hidden ${scrollToRight?'lg:hidden':''} absolute top-1/2 right-0 z-40 right-3`}>
        <button
        className="rounded-full h-10 w-10 flex items-center justify-center bg-black"
          onMouseUp={() => {
            stopInterval();
          }}
          onMouseDown={() => {
            sideScroll("right", 5, 10, 10);
          }}
        >
          <svg
            class="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </button>{" "}
      </div>
     
      <div
        className="flex pb-10 no-scrollbar overflow-x-auto"
        ref={parentHTML}
      >
        <div className="flex flex-nowrap lg:ml-5 md:ml-20 ml-10 ">
          {companyProducts.map((element) => (
            <div className="inline-block px-3">
              <ProductCard product={element} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardList;
