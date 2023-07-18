import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Nombre del producto es requerido'],
    },
    description:{
        type: String,
        required: [true, 'Descripcion es requerida'],
    },
    price:{
        type:number,
        required: [true, 'Precio es requerido'],
    },
    especialPrice:{
        type:Number,
    },
    currency:{
        type:String,
    },
    image:{
        type: String
    }
});

const Product = models.Product || model("Product", ProductSchema);
export default Product;