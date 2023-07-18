export const IMAGES_FORMAT_ACCEPTED = ['image/svg+xml', 'image/png', 'image/jpeg'];
export const IMAGE_PRINCIPAL_STORE_DIMENSION = {width:1500, height:2000};
export const STORE_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVESTORE"};
export const STORE_IMAGE_LOADED_CONFIRM_ACTION = {message:"¡Imagen cargada correctamente!", showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const STORE_IMAGE_FAILED_CONFIRM_ACTION = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const GENERAL_UKNOWN_ERROR = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"}
export const GENERAL_SUCCESS_PROCESS = {message:"Proceso ejecutado correctamante.",showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"}