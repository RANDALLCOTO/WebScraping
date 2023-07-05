"use client";
import React, {useState} from 'react'
import SearchButton from './SearchButton';
import ProductList from './ProductList';

const Search = () => {
  const [data, setData] = useState([]);
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Busca y compara los mejores precios
            <br />
        </h1>
        <p className="desc text-center mb-3">
            Ingresa en el cuadro de texto el producto que deseas buscar.
        </p>
        <SearchButton onSetData={setData}/>
        <ProductList data={data}/>
    </section>
  )
}

export default Search;
