//MESSAGING
export const IMAGES_FORMAT_ACCEPTED = ['image/svg+xml', 'image/png', 'image/jpeg'];
export const IMAGE_PRINCIPAL_STORE_DIMENSION = {width:3840, height:2160};
export const IMAGE_PRODUCT_STORE_DIMENSION = {width:3840, height:2160};
export const IMAGE_CATEGORY_STORE_DIMENSION = {width:3840, height:2160};
export const STORE_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVESTORE"};
export const IMAGE_LOADED_CONFIRM_ACTION = {message:"¡Imagen cargada correctamente!", showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const IMAGE_FAILED_CONFIRM_ACTION = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const DROPDOWN_NEED_TB_SELECTED = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const GENERAL_UKNOWN_ERROR = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"}
export const GENERAL_SUCCESS_PROCESS = {message:"Proceso ejecutado correctamante.",showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"}
export const PRODUCT_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVEPRODUCT"};
export const CATEGORY_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVECATEGORY"};


//LISTS
export const CURRENCY_LIST = [{value:"CRC", label:"Colones", feSimbol:"₡"},{value:"USD", label:"Dólares", feSimbol:"$"}];
export const CATEGORY_TYPES = [{value:"SELECT", label:"Seleccione un tipo de categoria"},{value:"PRIMARY", label:"Categoría Principal (Se muestra al inicio de la página)"},{value:"SECONDARY", label:"Categoria Secundaria"}];
export const CATEGORY_DEFAULT_LIST = [{value:"SELECT", label:"Seleccione una categoria"}];