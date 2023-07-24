import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
    store:{
        type: String,
        required: [true, 'Tienda es requerida'],
    },
    name:{
        type: String,
        required: [true, 'Nombre del Categoryo es requerido'],
    },
    description:{
        type: String,
        required: [true, 'Descripcion es requerida'],
    },
    type:{
        type:String,
        required: [true, 'Tipo es requerido'],
    },
    image:{
        type: String
    }
});

const Category = models.Category || model("Category", CategorySchema);
export default Category;