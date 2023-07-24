import React from 'react'
import CategoryCard from './CategoryCard';


const CategoryCardList = ({mode, store, categories}) => {
    console.log(mode);
    console.log(store);
    const PrimaryCategories = categories.filter(element => element.isPrimary && element.showOnMainPage);
  const SecondaryCategories = categories.filter(element => !element.isPrimary && element.showOnMainPage);

  return ( 
    <div className='w-full'>        
        <div className="container mx-auto">
            {PrimaryCategories.map((category, index) => (      
                <div className="h-64 rounded-md mt-4 overflow-hidden bg-cover bg-center h-80" style={{"background-image": `url('${category.image}')`}}>
                    <CategoryCard key={index} category={category} mode={mode}/>
                </div>
            ))}
            <div className="md:flex mt-8 md:-mx-4">
                {SecondaryCategories.map((category, index) => (        
                    <div className="w-full h-64 mt-4 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{"background-image": `url('${category.image}')`}}>
                        <CategoryCard key={index} category={category} mode={mode}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryCardList;