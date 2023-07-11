"use client";
import React, {useState} from 'react'
import SearchButton from './SearchButton';
import ProductList from './ProductList';

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const setInternalData = (dataToSet) =>{
    setData(oldArray => [...oldArray, dataToSet]);
    console.log(data);
  }
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Búscalo en sólo un lugar
            <br />
        </h1>
        <p className="desc text-center mb-3">
            Ingresa en el cuadro de texto el producto que deseas buscar.
        </p>
        <SearchButton onSetData={setInternalData} onRestartData = {setData} onSetLoading={setLoading}/>
        <ProductList data={data} loading={loading}/>

        
    </section>
  )
}

export default Search;
