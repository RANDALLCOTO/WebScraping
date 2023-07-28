"use client";
import React, { useEffect, useState } from 'react';
import DragDropFiles from '@components/DragDropFiles';
import Modal from '@components/Modal';
import { PRODUCT_SAVE_CONFIRM_ACTION, IMAGE_LOADED_CONFIRM_ACTION, IMAGE_FAILED_CONFIRM_ACTION, GENERAL_UKNOWN_ERROR, GENERAL_SUCCESS_PROCESS, CURRENCY_LIST, IMAGE_PRODUCT_STORE_DIMENSION, CATEGORY_DEFAULT_LIST, DROPDOWN_NEED_TB_SELECTED     } from '@utils/constants';
import { getSession, signIn } from "next-auth/react";
import Loading from '@app/loading';
import axios from 'axios';
import CurrencyInput from './CurrencyInput';
import DropDownList from './DropDownList';
import UploadedImage from './UploadedImage';
import {BsFillImageFill} from 'react-icons/bs';
import { CategoriesToArray } from '@utils/functions';

const StoreProductMaintenance = ({ params }) => {
    const [loading, setLoading]  =  useState(true);
    const [showConfirmAction, setShowConfirmAction] = useState(false);
    const [modalActionInfo, setModalActionInfo] = useState({});
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(CATEGORY_DEFAULT_LIST[0].value);
    const [price, setPrice] = useState(0);
    const [specialPrice, setSpecialPrice] = useState(0);
    const [currency, setCurrency] = useState(CURRENCY_LIST[0].value);
    const [image, setImage] = useState('');
    const [store, setStore] = useState(null);
    const [showImage, setShowImage] = useState(false);
    const [categoryList, setCategoryList] = useState(CATEGORY_DEFAULT_LIST[0].value);


    useEffect(() => {
      const securePage = async () => {
        const session = await getSession();
        if (!session) {
          signIn();
        } else {
            const storeInfo = await axios.get(`/api/user/${session.user.id}/store/`);
            console.log(storeInfo);
            setStore(storeInfo.data._id);
            const categories = await axios.get(`/api/category/${storeInfo.data._id}/store/get`);
            setCategoryList(CategoriesToArray(categories.data));
        
            if(params.productId!="NEW")
            {
                axios.get(`/api/product/${params.productId}/product/get/`)
                .then((response)  => {
                    const data = response.data;
                    console.log(data);
                    if (typeof data?._id != undefined) {
                        setId(data._id);
                        setName(data.name);
                        setDescription(data.description);
                        setPrice(data.price);
                        setSpecialPrice(data?.specialprice?data.specialprice:0);
                        setCurrency(data.currency);
                        setImage(data.image);
                        setCategory(data.category);
                    }
                    setLoading(false);
                }).catch(error => {
                    setLoading(false);
                    setModalActionInfo({...GENERAL_UKNOWN_ERROR, message: error.message});
                    setShowConfirmAction(true);
                });
            }else{
                setLoading(false);
            }
        }
      };
      securePage();
    }, []);

    
    const restartForm = ()=>{
        setId(null);
        setName('');
        setDescription('');
        setPrice(0);
        setSpecialPrice(0);
        setCurrency(CURRENCY_LIST[0].value);
        setImage('');
        setCategory(categoryList[0].value);
    }

    const confirmAction = (e) =>{
        e.preventDefault();
        setModalActionInfo(PRODUCT_SAVE_CONFIRM_ACTION);
        setShowConfirmAction(true);
    }

    const onConfirm = async(processToExecute)=>{
            if (processToExecute === "SAVEPRODUCT") {
                if (category==CATEGORY_DEFAULT_LIST[0].value){
                    setModalActionInfo({...DROPDOWN_NEED_TB_SELECTED, message:"Por favor seleccione la categoria"});
                    setShowConfirmAction(true);     
                }else{
                    setLoading(true);
                    axios.post(`/api/product/save`, {
                        id:id,
                        store: store,
                        name: name,
                        description: description,
                        category:category,
                        price: price.toString().replaceAll(",", ""),
                        specialprice: specialPrice.toString().replaceAll(",", ""),
                        currency: currency,
                        image: image,
                      })
                      .then((response) => {
                        restartForm();
                        setLoading(false);
                        setModalActionInfo(GENERAL_SUCCESS_PROCESS);
                        setShowConfirmAction(true);
                      })
                      .catch((error) => {
                        setLoading(false);
                        setModalActionInfo({
                          ...GENERAL_UKNOWN_ERROR,
                          message: error.message,
                        });
                        setShowConfirmAction(true);
                      });
                }
            }else{
                setShowConfirmAction(false);
            }
    }

    const onCancel = ()=>{
        setShowConfirmAction(false);
    }

    const setInternalImage =(image, error)=>{
        if(image===null){
            setModalActionInfo({...IMAGE_FAILED_CONFIRM_ACTION, message:error})
            setImage(null);
            setShowConfirmAction(true);
        }else{
            setModalActionInfo(IMAGE_LOADED_CONFIRM_ACTION);
            setShowConfirmAction(true);
            setImage(image);
        }

        
    }
    
    
    if(loading)
      return <Loading/>

  return (
    <>
        <form method='POST' onSubmit={confirmAction} className="mx-auto lg:max-w-screen-xl p-6 bg-gray-100 flex items-center justify-center">
            {showConfirmAction && <Modal modalActionInfo={modalActionInfo} onConfirm={onConfirm} onCancel={onCancel} />}
            <div className="container max-w-screen-lg mx-auto">
                <h2 className="font-semibold text-xl text-gray-600">Productos de la tienda</h2>
                <p className="text-gray-500 mb-6">¡Bienvenido a tu configuración de tienda!</p>
        
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                    <p className="font-medium text-lg">Configuración de Productos</p>
                    <p>Favor complete todos los campos para ingresar un producto.</p>
                    </div>
        
                    <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                            <label htmlFor="name">Nombre del producto</label>
                            <input type="text" required  name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Nombre del producto' value={name} onChange={e => {setName(e.target.value);}}/>
                        </div>
        
                        <div className="md:col-span-5">
                            <label htmlFor="description">Descripción corta del producto</label>
                            <input type="text" required name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Describe el producto" value={description} onChange={e => {setDescription(e.target.value);}} />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="category">Categoria</label>
                            <DropDownList onSelectValue={setCategory} values={categoryList} type="text" required name="category" id="category"  placeholder="Selecciona la categoria" currentValue={category} onChange={e => {setCategory(e.target.value);}} />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="price">Precio</label>
                            <CurrencyInput required placeholder="$0.00" type="text" value={price}  onChange={e => {setPrice(e.target.value);}} />
                        </div>
                        
                        <div className="md:col-span-3">
                        <label htmlFor="specialPrice">Precio Especial</label>
                            <CurrencyInput placeholder="$0.00" type="text" value={specialPrice}  onChange={e => {setSpecialPrice(e.target.value);}} />
                        </div>

                        <div className="md:col-span-5">
                            <label htmlFor="currency">Moneda</label>
                            <DropDownList onSelectValue={setCurrency} values={CURRENCY_LIST} type="text" required name="currency" id="currency"  placeholder="Selecciona la moneda" currentValue={currency} onChange={e => {setCurrency(e.target.value);}} />
                        </div>


                        <div className="md:col-span-5">
                            <label htmlFor="image">Proporcione la imagen del producto</label>
                            <DragDropFiles required name="image" id="image"  onImageLoaded={setInternalImage} acceptedDimension={IMAGE_PRODUCT_STORE_DIMENSION}/>
                        </div>
                
                        <div className="md:col-span-5 text-right">
                        <div className="inline-flex ">
                            {image && <BsFillImageFill type="button" className="w-12 h-auto mr-5 group-invalid:pointer-events-none group-invalid:opacity-30" onClick={()=> {setShowImage(true)}}/>}
                            <button type="submit" className="black_btn group-invalid:pointer-events-none group-invalid:opacity-30">Guardar</button>
                        </div>
                        </div>
        
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </form>
    {showImage && <UploadedImage image={image} onCloseFunction={setShowImage}/>} 
    
  </>
  )
}

export default StoreProductMaintenance;
