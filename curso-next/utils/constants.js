//MESSAGING
export const IMAGES_FORMAT_ACCEPTED = ['image/svg+xml', 'image/png', 'image/jpeg'];
export const IMAGE_PRINCIPAL_STORE_DIMENSION = {width:3840, height:2160};
export const IMAGE_PRODUCT_STORE_DIMENSION = {width:3840, height:2160};
export const IMAGE_CATEGORY_STORE_DIMENSION = {width:3840, height:2160};
export const CAROUSEL_STORE_DIMENSION = {width:3840, height:2160};
export const STORE_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVESTORE"};
export const IMAGE_LOADED_CONFIRM_ACTION = {message:"¡Imagen cargada correctamente!", showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const IMAGE_FAILED_CONFIRM_ACTION = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const DROPDOWN_NEED_TB_SELECTED = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"};
export const GENERAL_UKNOWN_ERROR = {showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"}
export const GENERAL_SUCCESS_PROCESS = {message:"Proceso ejecutado correctamante.",showCancelButton:false, okText:"¡Entendido!", cancelText:"Cancelar"}
export const PRODUCT_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVEPRODUCT"};
export const CATEGORY_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVECATEGORY"};
export const CAROUSEL_SAVE_CONFIRM_ACTION = {message:"¿Seguro de guardar los cambios?", showCancelButton:true, okText:"Estoy Seguro", cancelText:"Cancelar", processToExecute: "SAVECAROUSEL"};


//LISTS
export const CURRENCY_LIST = [{value:"CRC", label:"Colones", feSimbol:"₡"},{value:"USD", label:"Dólares", feSimbol:"$"}];
export const CATEGORY_TYPES = [{value:"SELECT", label:"Seleccione un tipo de categoria"},{value:"PRIMARY", label:"Categoría Principal (Se muestra al inicio de la página)"},{value:"SECONDARY", label:"Categoria Secundaria"}];
export const CATEGORY_DEFAULT_LIST = [{value:"SELECT", label:"Seleccione una categoria"}];
export const STORE_BACKGROUND_DIRECTION = [
        {value:"bbg-gradient-to-r", label:"Izquierda a Derecha"},
        {value:"bbg-gradient-to-t", label:"Hacia arriba"},
        {value:"bbg-gradient-to-tr", label:"De Arriba hacia Derecha"},
        {value:"bbg-gradient-to-br", label:"Izquierda a Derecha"},
        {value:"bbg-gradient-to-b", label:"De Abajo a Derecha"},
        {value:"bbg-gradient-to-bl", label:"De Arriba a Izquierda"},
        {value:"bbg-gradient-to-l", label:"Hacia la Izquierda"},
        {value:"bbg-gradient-to-tl", label:"Hacia Arriba e Izquierda"}];