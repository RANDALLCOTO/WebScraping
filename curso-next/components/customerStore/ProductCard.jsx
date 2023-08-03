"use client"
import { FormatCurrency } from "@utils/functions";
import React from "react";
import {AiOutlineEdit} from "react-icons/ai";
import Link from "next/link";


export const ProductCard = ({productUIConfig,  store, mode, product}) => {
  return (
    <div className={`bbg-${productUIConfig.bg} w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden`}>
      <div
        className="flex items-end justify-end h-56 w-full bg-cover"
        style={{ backgroundImage: `url('${product.image}')` }}
      >
      
          <button
            className={`p-2 rounded-full bbg-${productUIConfig.icon} ttext-${productUIConfig.iconLine} mx-5 -mb-4  focus:outline-none`}
            onClick={() => {
              alert(product._id);
            }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </button>
        {mode == "EDIT" && (
            <Link href={`/store/product/maintenance/${store}/${product._id}`}>
              <AiOutlineEdit
                className="inline rounded h-8 w-8 mr-2 bg-white mb-2"
                color="gray"
              />
            </Link>
        )}
      </div>
      <div className="px-5 py-3">
        <h3 className={`ttext-${productUIConfig.text} uppercase`}>{product.name}</h3>
        <span className={`ttext-${productUIConfig.price} mt-2`}>
          {FormatCurrency(product.price, product.currency)}
        </span>
      </div>
    </div>
  );
};
