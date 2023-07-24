"use client"
import {AiOutlineEdit} from "react-icons/ai"
const CategoryCard = ({category, mode}) => {
    const buttonClassName = category.isPrimary?
    'flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500':
    'flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none';
  return (
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold inline">{category.title}</h2>
                    {mode=="EDIT"? <AiOutlineEdit className="inline h-8 w-8 ml-6" color="white" onClick={()=>{alert(category.title)}}/>:null}
                    <p className="mt-2 text-gray-400">{category.description}</p>
                    <button className={buttonClassName}>
                        <span>Comprar Ahora</span>
                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>
  );
}

export default CategoryCard;