"use client"
import React, { useState } from 'react';
import {FiSettings} from 'react-icons/fi';
import {PiSelectionBackground} from 'react-icons/pi';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';
import ColorScheme from './ColorScheme';
import DropDownList from '@components/DropDownList';
import { STORE_BACKGROUND_DIRECTION } from '@utils/constants';


const VerticalNav = ({storeConfig, parentCallBack, closeNav}) => {
    const [type, setType] = useState(null);
    const [section, setSection] = useState(null);
    const [showPallete, setShowPallete] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);


    const setTransitionBG=(value)=>{
        parentCallBack('page-bg', 'bg-store-transition', value);
    }

    const callPallete=(section, type, pCurrentColor)=>{
        setType(type);
        setSection(section);
        setCurrentColor(pCurrentColor);
        setShowPallete(true);
     }

     const closePallete = (section, type, value) =>{
        setShowPallete(false);
        parentCallBack(section, type, value);
     }

  return (
    <div className='fixed top-0 left-0 h-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] w-full lg:w-[20rem] overflow-y-scroll overflow-x-hidden'>
        <div className='mt-4 grid-cols-1 grid-rows-10 gap-1 w-full'>
            <div className='ml-2 text-gray-600 text-medium flex items-center justify-left'>
                <FiSettings className="h-4 w-4 inline mr-2"/>
                <span className='inline text-2xl'>Configuracion</span>
            </div>
            <div className='ml-8 text-gray-600 text-medium flex items-center justify-left'>
                <PiSelectionBackground className="mt-4 h-4 w-4 inline mr-2"/>
                <span className='inline mt-4 text-xl'>Fondo de tienda</span>
            </div>
            <div className='ml-16 w-full text-gray-600 text-medium grid grid-cols-2 grid-rows-4 items-center'>
                <div className='h-8 mt-4'>Color Principal</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="bgFrom" id="bgFrom" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageMainBackGround.from}`}  onClick={e => {callPallete('page-bg','bg-store-primary',storeConfig.pageMainBackGround.from)}}/></div>
                <div className='h-8'>Color Intermedio</div>
                <div className='h-8 flex justify-center w-12'><button type="button"  name="bgVia" id="bgVia" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageMainBackGround.via}`}  onClick={e => {callPallete('page-bg','bg-store-intermediate',storeConfig.pageMainBackGround.via)}}/></div>
                <div className='h-8'>Color Secundario</div>
                <div className='h-8 flex justify-center w-12'><button type="button"  name="bgTo" id="bgTo" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageMainBackGround.to}`}  onClick={e => {callPallete('page-bg','bg-store-secondary',storeConfig.pageMainBackGround.to)}}/></div>
                <div className='h-8'>Horientacion</div>
                <div className='h-8 flex justify-center w-12'><DropDownList onSelectValue={setTransitionBG} className={`inline h-5 !w-12 mt-1 rounded`} values={STORE_BACKGROUND_DIRECTION} type="text" name="address" id="address"  placeholder="Selecciona la horientación" currentValue={storeConfig.pageMainBackGround.transition} onChange={e => {setTransitionBG(e.target.value);}} /></div>
            </div>
            <div className='ml-8 text-gray-600 text-medium flex items-center justify-left'>
                <PiSelectionBackground className="mt-4 h-4 w-4 inline mr-2"/>
                <span className='inline mt-4 text-xl'>Carousel de tienda</span>
            </div>
            <div className='ml-16 w-full text-gray-600 text-medium grid grid-cols-2 grid-rows-1 items-center'>
                <div className='h-8 mt-4'>Color Descripción</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="carouselDescription" id="carouselDescription" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageCarouselBackGround.description} `}  onClick={e => {callPallete('carousel-bg','description-carousel-primary',storeConfig.pageCarouselBackGround.description)}}/></div>
            </div>
            <div className='ml-8 text-gray-600 text-medium flex items-center justify-left'>
                <PiSelectionBackground className="mt-4 h-4 w-4 inline mr-2"/>
                <span className='inline mt-4 text-xl'>Aspecto de categorías</span>
            </div>
            <div className='ml-16 w-full text-gray-600 text-medium grid grid-cols-2 grid-rows-4 items-center'>
                <div className='h-8 mt-4'>Color Título</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="categoryTitle" id="categoryTitle" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageCategoryBackGround.title} `}  onClick={e => {callPallete('category-bg','title-category-primary',storeConfig.pageCategoryBackGround.title)}}/></div>
                <div className='h-8'>Color descripción</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="categoryDescription" id="categoryDescription" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageCategoryBackGround.description} `}  onClick={e => {callPallete('category-bg','description-category-primary',storeConfig.pageCategoryBackGround.description)}}/></div>
                <div className='h-8'>Texto Btn Primario</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="categoryBTNPrimary" id="categoryBTNPrimary" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageCategoryBackGround.btnPrimary} `}  onClick={e => {callPallete('category-bg','btnPrimary-category-primary',storeConfig.pageCategoryBackGround.btnPrimary)}}/></div>
                <div className='h-8'>Fondo Btn Primario</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="categoryBTNPrimaryBG" id="categoryBTNPrimaryBG" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageCategoryBackGround.btnPrimaryBG} `}  onClick={e => {callPallete('category-bg','btnPrimaryBG-category-primary',storeConfig.pageCategoryBackGround.btnPrimaryBG)}}/></div>
                <div className='h-8'>Texto Btn Secundario </div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="categoryBTNSecondary" id="categoryBTNSecondary" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageCategoryBackGround.btnSecondary} `}  onClick={e => {callPallete('category-bg','btnSecondary-category-primary',storeConfig.pageCategoryBackGround.btnSecondary)}}/></div>
            </div>
            <div className='ml-8 text-gray-600 text-medium flex items-center justify-left'>
                <MdOutlineProductionQuantityLimits className="mt-4 h-4 w-4 inline mr-2"/>
                <span className='inline mt-4 text-xl'>Aspecto de productos</span>
            </div>
            <div className='ml-16 w-full text-gray-600 text-medium grid grid-cols-2 grid-rows-5 items-center'>
                <div className='h-8 mt-4'>Color Principal</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="productBG" id="productBG" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageProductBackGround.bg} `}  onClick={e => {callPallete('product-bg','bg-product-primary',storeConfig.pageProductBackGround.bg)}}/></div>
                <div className='h-8'>Color de Texto</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="productText" id="productText" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageProductBackGround.text} `}  onClick={e => {callPallete('product-bg','text-product-primary',storeConfig.pageProductBackGround.text)}}/></div>
                <div className='h-8'>Color de Precio</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="productPrice" id="productPrice" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageProductBackGround.price} `}  onClick={e => {callPallete('product-bg','price-product-primary',storeConfig.pageProductBackGround.price)}}/></div>
                <div className='h-8'>Fondo Ícono </div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="productIcon" id="productIcon" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageProductBackGround.icon} `}  onClick={e => {callPallete('product-bg','icon-product-primary',storeConfig.pageProductBackGround.icon)}}/></div>
               <div className='h-8'>Línea Ícono</div>
                <div className='h-8 flex justify-center w-12'><button type="button" name="productIconLine" id="productIconLine" className={`border-slate-500 border-dashed border inline w-5 h-5  mt-1 rounded bbg-${storeConfig.pageProductBackGround.iconLine} `}  onClick={e => {callPallete('product-bg','iconLine-product-primary',storeConfig.pageProductBackGround.iconLine)}}/></div>
            </div>
            
        </div>

            {showPallete && <ColorScheme currentColor={currentColor} onSelectedColor={closePallete} section={section} type={type}/> }   
    </div>
  )
}

export default VerticalNav;