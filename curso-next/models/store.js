import { Schema, model, models } from "mongoose";

const StoreSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Nombre de tienda es requerido'],
    },
    description:{
        type: String,
        required: [true, 'Descripcion es requerida'],
    },
    user:{
        type:String,
        required:[true, 'Usuario es requerido']
    },
    email:{
        type:String,
        required: [true, 'Email es requerido'],
        unique: [true, 'Email ya se encuentra registrado']
    },
    contactnumber:{
        type:Number,
        required:[true, 'Contacto es requerido'],
        unique:['Numero de contacto es requerido']
    },
    showwhatssapicon:{
        type:Boolean,
        default: false
    },
    address:{
        type: String,
        required: [true, 'Direccion es requerido'],
    },
    image:{
        type: String
    },        
});

const Store = models.Store || model("Store", StoreSchema);
export default Store;