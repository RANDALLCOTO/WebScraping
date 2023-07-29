import React from 'react'
import CategoryCard from './CategoryCard';
import {MdCategory} from 'react-icons/md';


const CategoryCardList = ({mode, store, categories}) => {
    const PrimaryCategories = categories.filter(element => element.categoryInfo.type == "PRIMARY");
    const SecondaryCategories = categories.filter(element => element.categoryInfo.type == "SECONDARY");

  return ( 
    <div>  
        <div className='grid w-full mt-4 mb-4 justify-center'>
            <div className='w-full justify-center text-gray-600 text-medium lg:text-4xl'>Nuestras categorias</div>
            <div className='w-full flex justify-center'><MdCategory className='h-10 w-10 text-gray-900	'/></div>
        </div>      
        <div className='w-full'>
            {PrimaryCategories.map((category, index) => (      
                <div className="h-64 mt-4 overflow-hidden bg-cover bg-center lg:h-80" style={{backgroundImage: `url('${category.categoryInfo.image}')`}}>
                    <CategoryCard key={index} store={store} category={category.categoryInfo} mode={mode}/>
                </div>
            ))}
            <div className="md:flex mt-8  mr-2 ml-2">
                {SecondaryCategories.map((category, index) => (        
                    <div className="w-full h-64 mt-4 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{backgroundImage: `url('${category.categoryInfo.image}')`}}>
                        <CategoryCard key={index} store={store} category={category.categoryInfo} mode={mode}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryCardList;