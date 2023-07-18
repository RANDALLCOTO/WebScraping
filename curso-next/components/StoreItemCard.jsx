import React from 'react';

 const StoreItemCard = ({itemStoreInfo}) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={itemStoreInfo.itemLink}>
            <img className="rounded-t-lg" src={itemStoreInfo.itemImage} alt="" />
        </a>
        <div className="p-5">
            <a href={itemStoreInfo.itemLink}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{itemStoreInfo.itemTitle   }</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{itemStoreInfo.itemDescription}</p>
            <a
            href={itemStoreInfo.itemLink}
            className="inline-flex items-center font-medium text-orange-500 dark:text-blue-500 hover:underline"
          >
            Ir al item
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
    </div>
  )
}

export default StoreItemCard;