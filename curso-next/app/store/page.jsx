 "use client";
import React, { useEffect, useState } from 'react';
import DragDropFiles from '@components/DragDropFiles';
import Modal from '@components/Modal';
import { STORE_SAVE_CONFIRM_ACTION, IMAGE_LOADED_CONFIRM_ACTION, IMAGE_FAILED_CONFIRM_ACTION, GENERAL_UKNOWN_ERROR, GENERAL_SUCCESS_PROCESS, IMAGE_PRINCIPAL_STORE_DIMENSION     } from '@utils/constants';
import { getSession, signIn } from "next-auth/react";
import { PhoneNumber } from '@utils/functions';
import Loading from '@app/loading';
import axios from 'axios';
import {BsFillImageFill} from 'react-icons/bs';
import UploadedImage from '@components/UploadedImage';


const Store = () => {
    const [loading, setLoading]  =  useState(true);
    const [showConfirmAction, setShowConfirmAction] = useState(false);
    const [modalActionInfo, setModalActionInfo] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [showwhatssapicon, setShowWhatssapIcon] = useState(false);
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [showImage, setShowImage] = useState(false);
    const [storeId, setStoreId] = useState(null);
    const [address, setAddress] = useState('');

    useEffect(() => {
      const securePage = async () => {
        const session = await getSession();
        if (!session) {
          signIn();
        } else {
          axios.get(`/api/store/${session.user.id}/user/get`)
            .then((response)  => {
                const data = response.data;
                if (data.length > 0) {
                    setName(data[0].name);
                    setDescription(data[0].description);
                    setEmail(data[0].email);
                    setImage(data[0].image);
                    setContactNumber(data[0].contactnumber);
                    setAddress(data[0].address);
                    setShowWhatssapIcon(data[0].showwhatssapicon);
                    setStoreId(data[0]._id);
                }
                setLoading(false);
            }).catch(error => {
                setLoading(false);
                setModalActionInfo({...GENERAL_UKNOWN_ERROR, message: error.message});
                setShowConfirmAction(true);
              });;
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
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
            if (processToExecute === "SAVESTORE") {
              setLoading(true);
              axios
                .post(`/api/store/save`, {
                  id:storeId,
                  name: name,
                  description: description,
                  contactnumber: contactNumber.toString().replace(/[^\w]/g, ""),
                  email: email,
                  showwhatssapicon: showwhatssapicon,
                  image: image,
                  address: address,
                  user:session.user.id
                })
                .then((response) => {
                  setStoreId(response.data.id);
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
    }

    const onCancel = ()=>{
        setShowConfirmAction(false);
    }

    const setInternalImage =(image, error)=>{
        if(image===null){
            setModalActionInfo({...IMAGE_FAILED_CONFIRM_ACTION, message:error})
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
          <div>
              <h2 className="font-semibold text-xl text-gray-600">Detalles de Tienda Generales</h2>
              <p className="text-gray-500 mb-6">¡Bienvenido a tu configuración de tienda!</p>
      
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                  <p className="font-medium text-lg">Configuración General</p>
                  <p>Favor complete todos los campos.</p>
                  </div>
      
                  <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                          <label htmlFor="full_name">Nombre de la Tienda</label>
                          <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='Nombre de Tienda' value={name} onChange={e => {setName(e.target.value);}}/>
                      </div>
      
                      <div className="md:col-span-5">
                          <label htmlFor="descrition">Descripción de tienda</label>
                          <input type="text" name="descrition" id="descrition" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Describe los productos y servicios que ofreces." value={description} onChange={e => {setDescription(e.target.value);}} />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="email">Email de contacto</label>
                        <input required type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@dominio.com" value={email} onChange={e => {setEmail(e.target.value);}}/>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="contactnumber">Número de Contacto</label>
                        <PhoneNumber name="contactnumber" id="contactnumber" value={contactNumber}  onChange={e => {setContactNumber(e.target.value);}}/>
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="address">Dirección física</label>
                        <input required type="input" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="País, Ciudad, otras señas." value={address} onChange={e => {setAddress(e.target.value);}}/>
                      </div>

                      <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                          <img className='mr-2' src="/assets/images/ws-image.png" width={30} height={30}></img>
                          <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" checked={showwhatssapicon} onChange={() => {setShowWhatssapIcon(prev => !prev);}}/>
                          <label htmlFor="billing_same" className="ml-2">Quiero habilitar el contacto por Whatssap en mi tienda.</label>
                      </div>
                      </div>

                      <div className="md:col-span-5">
                          <label htmlFor="image">Proporcione el logo de la tienda</label>
                          <DragDropFiles id="image" name="image" onImageLoaded={setInternalImage} acceptedDimension={IMAGE_PRINCIPAL_STORE_DIMENSION}/>
                      </div>
              
                      <div className="md:col-span-5 text-right">
                      <div className="inline-flex">
                         {image && <BsFillImageFill type="button" className="w-12 h-auto mr-5 group-invalid:pointer-events-none group-invalid:opacity-30" onClick={()=> {setShowImage(true)}}/>}
                          <button type="submit" className="black_btn">Guardar</button>
                      </div>
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

export default Store;
