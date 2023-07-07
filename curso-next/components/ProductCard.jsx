"use client";
import Link from "next/link";

const ProductCard = ({product, company}) => {
  return (
    <div
        className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
            className="rounded-t-lg"
            style={{width:"100%", height:"auto"}}
            src={product.productImage==""? "https://www.edelar.com.ar/static/theme/images/sin_imagen.jpg": product.productImage}
            alt="" />
            <a href="#!">
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
        </div>
        <div className="p-6">
        <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {product.productName}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {product.productPrice}
        </p>
   
   
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {company}
        </p>
        
        <Link
            href={product.vendorLink} 
            type="button"
            className="black_btn"
            data-te-ripple-init
            data-te-ripple-color="light">
            Button
        </Link>
        </div></div>
  )
}

export default ProductCard;