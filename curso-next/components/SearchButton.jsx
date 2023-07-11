"use client";

import { useState } from "react";

  const SearchButton = ({onSetData, onSetLoading, onRestartData}) => {
  const [serchText, setSearchText] = useState('');
  const restartFields = (value) =>{
    setSearchText(value)
    onRestartData([]);
  }

  const fetchProducts = async (e) => {
       e.preventDefault();
        onSetLoading(true);
        for (let index = 1; index < 4; index++) {      
          const response = await fetch(`/api/search/${index}/${serchText.replace(" ", "+")}`);
          const data = await response.json();
          onSetData(data);
        }
        onSetLoading(false);
  }

  return (
    
      <div className="mb-3 w-full sm:w-1/2 ">
        <form onSubmit={fetchProducts}>
          <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
            <input
              type="search"
              className="block w-full px-4 py-2 text-gray-400 bg-white border rounded-full focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Buscar"
              aria-label="Search"
              aria-describedby="button-addon3" 
              onChange={(e)=>{restartFields(e.target.value)}}
              />
          </div>
        </form>
      </div>
    
  )
}

export default SearchButton;