"use client";
import React, { useEffect, useState } from 'react';
import DragDropFiles from '@components/DragDropFiles';
import Modal from '@components/Modal';
import { CATEGORY_SAVE_CONFIRM_ACTION, IMAGE_LOADED_CONFIRM_ACTION, IMAGE_FAILED_CONFIRM_ACTION, GENERAL_UKNOWN_ERROR, GENERAL_SUCCESS_PROCESS, IMAGE_CATEGORY_STORE_DIMENSION, CATEGORY_TYPES, DROPDOWN_NEED_TB_SELECTED     } from '@utils/constants';
import { getSession, signIn } from "next-auth/react";
import Loading from '@app/loading';
import axios from 'axios';
import DropDownList from './DropDownList';
import UploadedImage from './UploadedImage';
import {BsFillImageFill} from 'react-icons/bs';

const StoreCategoryMaintenance = ({ params }) => {
    const [loading, setLoading]  =  useState(true);
    const [showConfirmAction, setShowConfirmAction] = useState(false);
    const [modalActionInfo, setModalActionInfo] = useState({});
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState(CATEGORY_TYPES[0].value);
    const [image, setImage] = useState('');
    const [store, setStore] = useState(null);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
      const securePage = async () => {
        const session = await getSession();
        if (!session) {
          signIn();
        } else {
            const storeInfo = await axios.get(`/api/user/${session.user.id}/store/`);
            setStore(storeInfo.data._id);
            if(params.categoryId!="NEW")
            {
                axios.get(`/api/category/${params.categoryId}/category/get/`)
                .then((response)  => {
                    const data = response.data;
                    console.log(data);
                    if (typeof data?._id != undefined) {
                        setId(data._id);
                        setName(data.name);
                        setDescription(data.description);
                        setType(data.type);
                        setImage(data.image);
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
        setType(CATEGORY_TYPES[0].value);
    }

    const confirmAction = (e) =>{
        e.preventDefault();
        setModalActionInfo(CATEGORY_SAVE_CONFIRM_ACTION);
        setShowConfirmAction(true);
    }

    const onConfirm = async(processToExecute)=>{
            if (processToExecute === "SAVECATEGORY") {

              if(type == CATEGORY_TYPES[0].value){
                setModalActionInfo({...DROPDOWN_NEED_TB_SELECTED, message:"Por favor seleccione el tipo de categoria"});
                setShowConfirmAction(true);
              }else{
                setLoading(true);
                axios.post(`/api/category/save`, {
                    id:id,
                    store: store,
                    name: name,
                    description: description,
                    type: type,
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
        <form method='POST' onSubmit={confirmAction} className="mx-auto lg:max-w-screen-xl  p-6 bg-gray-100 flex items-center justify-center">
            {showConfirmAction && <Modal modalActionInfo={modalActionInfo} onConfirm={onConfirm} onCancel={onCancel} />}
            <div className="container max-w-screen-lg mx-auto">
                <h2 className="font-semibold text-xl text-gray-600">Categorias de la tienda</h2>
                <p className="text-gray-500 mb-6">¡Bienvenido a tu configuración de tienda!</p>
        
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                    <p className="font-medium text-lg">Configuración de Categorias</p>
                    <p>Favor complete todos los campos para ingresar una Categoria.</p>
                    </div>
        
                    <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                            <label htmlFor="name">Nombre de la categoria</label>
                            <input type="text" required  name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Nombre del producto' value={name} onChange={e => {setName(e.target.value);}}/>
                        </div>
        
                        <div className="md:col-span-5">
                            <label htmlFor="description">Descripción de la categoria</label>
                            <input type="text" required name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Describe el producto" value={description} onChange={e => {setDescription(e.target.value);}} />
                        </div>

                    
                        <div className="md:col-span-5">
                            <label htmlFor="type">Tipo de categoría</label>
                            <DropDownList onSelectValue={setType} values={CATEGORY_TYPES} type="text" required name="type" id="type"  placeholder="Selecciona la categoria" currentValue={type} onChange={e => {setType(e.target.value);}} />
                        </div>


                        <div className="md:col-span-5">
                            <label htmlFor="image">Proporcione la imagen de la categoria</label>
                            <DragDropFiles required name="image" id="image"  onImageLoaded={setInternalImage} acceptedDimension={IMAGE_CATEGORY_STORE_DIMENSION}/>
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

export default StoreCategoryMaintenance;
