import React from 'react'
import CategoryCard from './CategoryCard';


const CategoryCardList = ({mode, store, categories}) => {
    const PrimaryCategories = categories.filter(element => element.categoryInfo.type == "PRIMARY");
    const SecondaryCategories = categories.filter(element => element.categoryInfo.type == "SECONDARY");

  return ( 
    <div className='ml-2 mr-2'>        
        <div className='w-full'>
            {PrimaryCategories.map((category, index) => (      
                <div className="h-64 rounded-md mt-4 overflow-hidden bg-cover bg-center h-80" style={{backgroundImage: `url('${category.categoryInfo.image}')`}}>
                    <CategoryCard key={index} store={store} category={category.categoryInfo} mode={mode}/>
                </div>
            ))}
            <div className="md:flex mt-8 md:-mx-4">
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