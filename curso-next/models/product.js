import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    store:{
        type: String,
        required: [true, 'Tienda es requerida'],
    },
    name:{
        type: String,
        required: [true, 'Nombre del producto es requerido'],
    },
    description:{
        type: String,
        required: [true, 'Descripcion es requerida'],
    },
    category:{
        type: String,
        required: [true, 'Categoria es requerida'],
    },
    price:{
        type:Number,
        required: [true, 'Precio es requerido'],
    },
    especialprice:{
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