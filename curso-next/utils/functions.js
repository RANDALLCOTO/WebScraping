import { CATEGORY_DEFAULT_LIST, CURRENCY_LIST, IMAGES_FORMAT_ACCEPTED, IMAGE_PRINCIPAL_STORE_DIMENSION } from "./constants";
import InputMask from 'react-input-mask';
import { redirect } from 'next/navigation';


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

export const fileToBase64 = (file, onImageValidated) =>{
        var reader = new FileReader();
        reader.onload = function () {
            onImageValidated({messageCode:"OK", messageValue:reader.result});
        };
        reader.onerror = function (error) {
            onImageValidated({messageCode:"ERROR", messageValue:"FILE_NOT_BASE64"});
        };
        reader.readAsDataURL(file);
}

export const validateImageDimension = async (base64Image, acceptedDimension, onDimenssionValidated) => {
   try {
     var i = new Image();
     i.onload = function(){
         if(i.width == acceptedDimension.width && 
            i.height == acceptedDimension.height) {
                onDimenssionValidated({messageCode:"OK", messageValue:base64Image});
            }else{
                //onDimenssionValidated({messageCode:"ERROR", messageValue:"NOT_ACCEPTED_DIMENSION"});
                onDimenssionValidated({messageCode:"OK", messageValue:base64Image});
            }
     };
     i.src = base64Image;
   } catch (error) {
        return {messageCode:"ERROR", messageValue:"UKNOWN"};
   }

}

export const frontEndFormattedMessage = (type, messageCode="", messageDescription="") => {
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

  export const CategoriesToArray = (array)=>{
    let arrayToreturn = CATEGORY_DEFAULT_LIST;
    array.forEach(element => {
        arrayToreturn.push({value:element._id, label:element.name});
    });   
    return arrayToreturn;
  }

  export const FormatCurrency = (amount, currency) => {
    const simbol = CURRENCY_LIST.filter((element)=> element.value = currency)[0].feSimbol;
    return  `${simbol} ${amount.toLocaleString("de-DE")}`;

  }


  export const FormatPhoneNumber = (str) => {
    let cleaned = ('' + str).replace(/\D/g, '');
    
    let match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
  
    return null
  };

