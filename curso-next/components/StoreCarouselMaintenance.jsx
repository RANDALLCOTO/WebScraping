"use client";
import React, { useEffect, useState } from 'react';
import DragDropFiles from '@components/DragDropFiles';
import Modal from '@components/Modal';
import { IMAGE_LOADED_CONFIRM_ACTION, IMAGE_FAILED_CONFIRM_ACTION, GENERAL_UKNOWN_ERROR, GENERAL_SUCCESS_PROCESS,  CAROUSEL_SAVE_CONFIRM_ACTION, CAROUSEL_STORE_DIMENSION     } from '@utils/constants';
import { getSession, signIn } from "next-auth/react";
import Loading from '@app/loading';
import axios from 'axios';
import UploadedImage from './UploadedImage';
import {BsFillImageFill} from 'react-icons/bs';

const StoreCarouselMaintenance = ({ params }) => {
    const [loading, setLoading]  =  useState(true);
    const [showConfirmAction, setShowConfirmAction] = useState(false);
    const [modalActionInfo, setModalActionInfo] = useState({});
    const [id, setId] = useState(null);
    const [image, setImage] = useState('');
    const [label, setLabel] = useState('');
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
            console.log(params);
            if(params.carouselImageId!="NEW")
            {
                axios.get(`/api/carousel/${params.carouselImageId}/carousel/get/`)
                .then((response)  => {
                    const data = response.data;
                    console.log(data);
                    if (typeof data?._id != undefined) {
                        setId(data._id);
                        setLabel(data.label);
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
        setLabel('');
        setImage('');
    }

    const confirmAction = (e) =>{
        e.preventDefault();
        setModalActionInfo(CAROUSEL_SAVE_CONFIRM_ACTION);
        setShowConfirmAction(true);
    }

    const onConfirm = async(processToExecute)=>{
            if (processToExecute === "SAVECAROUSEL") {
                setLoading(true);
                axios.post(`/api/carousel/save`, {
                    id:id,
                    store: store,
                    label: label,
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
                <h2 className="font-semibold text-xl text-gray-600">Carousel de la tienda</h2>
                <p className="text-gray-500 mb-6">¡Bienvenido a tu configuración de tu Carousel!</p>
        
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                    <p className="font-medium text-lg">Configuración de Carousel</p>
                    <p>Podes elegir hasta 3 imagenes para mostrar en el encabezado inicial de tu tienda</p>
                    </div>
        
                    <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                            <label htmlFor="image">Proporcione la imagen</label>
                            <DragDropFiles required name="image" id="image"  onImageLoaded={setInternalImage} acceptedDimension={CAROUSEL_STORE_DIMENSION}/>
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="label">Indique el texto a mostrar</label>
                            <input type="text" required  name="label" id="label" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Texto a mostrar' value={label} onChange={e => {setLabel(e.target.value);}}/>
                        </div>
                    </div>
                    <div className="md:col-span-5 text-right mt-4">
                        <div className="inline-flex ">
                            {image && <BsFillImageFill type="button" className="w-12  h-auto mr-5 group-invalid:pointer-events-none group-invalid:opacity-30" onClick={()=> {setShowImage(true)}}/>}
                            <button type="submit" className="black_btn group-invalid:pointer-events-none group-invalid:opacity-30">Guardar</button>
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

export default StoreCarouselMaintenance;
