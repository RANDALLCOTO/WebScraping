"use client";
import React, { useEffect, useState } from 'react';
import DragDropFiles from '@components/DragDropFiles';
import Modal from '@components/Modal';
import { STORE_SAVE_CONFIRM_ACTION, STORE_IMAGE_LOADED_CONFIRM_ACTION, STORE_IMAGE_FAILED_CONFIRM_ACTION, GENERAL_UKNOWN_ERROR, GENERAL_SUCCESS_PROCESS     } from '@utils/constants';
import { getSession, signIn } from "next-auth/react";
import { PhoneNumber } from '@utils/functions';
import Loading from '@app/loading';
import axios from 'axios';
import CurrencyInput from './CurrencyInput';

const StoreProductMaintenance = ({ params }) => {
    const [loading, setLoading]  =  useState(true);
    const [showConfirmAction, setShowConfirmAction] = useState(false);
    const [modalActionInfo, setModalActionInfo] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(0);
    const [specialPrice, setSpecialPrice] = useState(0);
    const [currency, setCurrency] = useState(null);
    const [image, setImage] = useState(null);


    console.log(params);

    useEffect(() => {
      const securePage = async () => {
        const session = await getSession();
        if (!session) {
          signIn();
        } else {
            if(params.productId!="NEW")
            {
                /*axios.get(`/api/product/get/${session.user.email}`)
                .then((response)  => {
                    const data = response.data;
                    if (typeof data?.email != undefined) {
                        setName(data.name);
                        setDescription(data.description);
                        setEmail(data.email);
                        setImage(data.image);
                        setContactNumber(data.contactnumber);
                        setShowWhatssapIcon(data.showwhatssapicon);
                    }
                    setLoading(false);
                }).catch(error => {
                    setLoading(false);
                    setModalActionInfo({...GENERAL_UKNOWN_ERROR, message: error.message});
                    setShowConfirmAction(true);
                });;*/
            }else{
                setLoading(false);
            }
        }
      };
      securePage();
    }, []);

      
    const confirmAction = (e) =>{
        e.preventDefault();
        setModalActionInfo(STORE_SAVE_CONFIRM_ACTION);
        setShowConfirmAction(true);
    }

    const onConfirm = async(processToExecute)=>{
            if (processToExecute === "SAVESTORE") {
                console.log(price);
                console.log(description);
                console.log(price);
                console.log(specialPrice);
                
                console.log(image);
                
                console.log(currency);
              /*setLoading(true);
              axios
                .post(`/api/store/save`, {
                  name: name,
                  description: description,
                  contactnumber: contactNumber.toString().replace(/[^\w]/g, ""),
                  email: email,
                  showwhatssapicon: showwhatssapicon,
                  image: image,
                })
                .then((response) => {
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
                });*/
            }else{
                setShowConfirmAction(false);
            }
    }

    const onCancel = ()=>{
        setShowConfirmAction(false);
    }

    const setInternalImage =(image, error)=>{
        if(image===null){
            setModalActionInfo({...STORE_IMAGE_FAILED_CONFIRM_ACTION, message:error})
            setShowConfirmAction(true);
        }else{
            setModalActionInfo(STORE_IMAGE_LOADED_CONFIRM_ACTION);
            setShowConfirmAction(true);
            setImage(image);
        }

        
    }
    
    
    if(loading)
      return <Loading/>

  return (
    <form method='POST' onSubmit={confirmAction} className="p-6 bg-gray-100 flex items-center justify-center">
        {showConfirmAction && <Modal modalActionInfo={modalActionInfo} onConfirm={onConfirm} onCancel={onCancel} />}
        <div className="container max-w-screen-lg mx-auto">
        <div>
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


                    <div className="md:col-span-2">
                        <label htmlFor="price">Precio</label>
                        <CurrencyInput required placeholder="$0.00" type="text" value={price}  onChange={e => {setPrice(e.target.value);}} />
                    </div>
                    
                    <div className="md:col-span-2">
                    <label htmlFor="specialPrice">Precio Especial</label>
                        <CurrencyInput placeholder="$0.00" type="text" value={specialPrice}  onChange={e => {setSpecialPrice(e.target.value);}} />
                    </div>

                    <div className="md:col-span-1">
                        <label htmlFor="currency">Moneda</label>
                        <input type="text" required name="currency" id="currency" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Selecciona la moneda" value={currency} onChange={e => {setCurrency(e.target.value);}} />
                    </div>


                    <div className="md:col-span-5">
                        <label htmlFor="image">Arraste o seleccione la imagen</label>
                        <DragDropFiles required name="image" id="image"  onImageLoaded={setInternalImage}/>
                    </div>
            
                    <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                        <button type="submit" className="black_btn group-invalid:pointer-events-none group-invalid:opacity-30">Guardar</button>
                    </div>
                    </div>
    
                </div>
                </div>
            </div>
            </div>
        </div>

        </div>
  </form>
  )
}

export default StoreProductMaintenance;
