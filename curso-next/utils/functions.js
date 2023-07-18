import { IMAGES_FORMAT_ACCEPTED, IMAGE_PRINCIPAL_STORE_DIMENSION } from "./constants";
import InputMask from 'react-input-mask';
import { redirect } from 'next/navigation'


export const isUserAuthenticathed = (status) => {
    try {
        return status === "authenticated";
    } catch (error) {
        return false; 
    }
}

export const returnToLogin=()=>{
    return redirect("/api/auth/signin");
}

export const validatePrincipalImageStore =(imageArray=[])=>{
    if(imageArray.length > 1)
        return frontEndFormattedMessage("error", "TOO_MANY_FILES", "Solamente puede adjuntar un archivo");
    if(!IMAGES_FORMAT_ACCEPTED.includes(imageArray[0].type))
        return frontEndFormattedMessage("error", "EXT_NOT_ACCEPTED", `La extensión ${imageArray[0].type} no es aceptada`);

    return frontEndFormattedMessage("success");    
}

export const fileToBase64 = (file, onSuccessFunction, onErrorFunction) =>{
        var reader = new FileReader();
        reader.onload = function () {
            validateImageDimension(reader.result, IMAGE_PRINCIPAL_STORE_DIMENSION, onSuccessFunction, onErrorFunction);
            onSuccessFunction(true, reader.result, null);
        };
        reader.onerror = function (error) {
            onErrorFunction(frontEndFormattedMessage("error", "FILE_NOT_BASE64", error))
        };
        reader.readAsDataURL(file);
}

const validateImageDimension = (base64Image, acceptedDimension, onSuccessFunction, onErrorFunction) => {
   try {
     var i = new Image();
     i.onload = function(){
         if(i.width == acceptedDimension.width && 
            i.height == acceptedDimension.height) {
                onSuccessFunction(true, base64Image);
            }else{
                onErrorFunction(frontEndFormattedMessage("error", "NOT_ACCEPTED_DIMENSION", `Las dimensiones aceptadas deben ser de ${acceptedDimension.width}x${acceptedDimension.height}. Favor intente nuevamente.`));
            }
     };
     i.src = base64Image;
   } catch (error) {
        onErrorFunction(frontEndFormattedMessage("error", "UKNOWN", error));
   }

}

const frontEndFormattedMessage = (type, messageCode="", messageDescription="") => {
    return {type, messageCode, messageDescription}
}

export const PhoneNumber = props => (
    <InputMask
      mask="(999) 9999-9999"
      value={props.value}
      onChange={props.onChange}
      
    >
      {inputProps => <input  {...inputProps} type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="(999) 9999-9999"   />  }
    </InputMask>

  );