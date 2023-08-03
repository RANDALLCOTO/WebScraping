import React from 'react'
import CategoryCard from './CategoryCard';
import {MdCategory} from 'react-icons/md';


const CategoryCardList = ({categoryUIConfig, mode, store, categories}) => {
    const PrimaryCategories = categories.filter(element => element.categoryInfo.type == "PRIMARY");
    const SecondaryCategories = categories.filter(element => element.categoryInfo.type == "SECONDARY");

  return ( 
    <div>  
             <div className=" relaative lg:w-2/3 text-center mx-auto mt-4">
                <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Dale un vistazo a nuestras <span className="text-primary text-purple-500 dark:text-white">categorias.</span></h1>
                <p className="mt-8 text-gray-700 dark:text-gray-300">Nos encanta que estés aquí. No te vayas sin darle un vistazo a la gran variedad de productos y categorias que ofrecemos. No dudes en contactaarnos en caso de dudas, estaremos felices de ayudarte a conseguir tu producto soñado.</p>
            </div>
   
        <div className='w-full'>
            {PrimaryCategories.map((category, index) => (      
                <div className="h-64 mt-4 overflow-hidden bg-cover bg-center lg:h-80" style={{backgroundImage: `url('${category.categoryInfo.image}')`}}>
                    <CategoryCard  categoryUIConfig={categoryUIConfig} key={index} store={store} category={category.categoryInfo} mode={mode}/>
                </div>
            ))}
            <div className="md:flex mt-8  mr-2 ml-2">
                {SecondaryCategories.map((category, index) => (        
                    <div className="w-full h-64 mt-4 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{backgroundImage: `url('${category.categoryInfo.image}')`}}>
                        <CategoryCard categoryUIConfig={categoryUIConfig} key={index} store={store} category={category.categoryInfo} mode={mode}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryCardList;