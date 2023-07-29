import { connectToDB } from "@utils/database";
import Carousel from '@models/carousel';

export const GET = async (req, { params }) => {
    try {
         //DB
         await connectToDB();

        //Check if products exists
        let carouselExists;
        if(params.field =='carousel'){
            carouselExists = await Carousel.findOne({_id:params.id});
        }else{
            carouselExists = await Carousel.find({store:params.id});
        }
        return new Response(JSON.stringify(carouselExists? carouselExists: {}), { status: 200 })
         
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}), { status: 500 })

    }
    
}