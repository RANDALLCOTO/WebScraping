import { Schema, model, models } from "mongoose";

const CarouselSchema = new Schema({
    store:{
        type: String,
        required: [true, 'Tienda es requerido'],
    },
    image:{
        type: String
    },
    label:{
        type: String
    }   
});

const Carousel = models.Carousel || model("Carousel", CarouselSchema);
export default Carousel;