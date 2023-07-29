import { connectToDB } from "@utils/database";
import Carousel from '@models/carousel';

export const POST = async (req) => {
    try {
        const CarouselToSave = await req.json();
        let createdID;
         //DB
         await connectToDB();
        //check if Carousel exists
        const CarouselExists = await Carousel.findOne({
            _id:CarouselToSave.id
        })
        //if not, create new Carousel
         if(!CarouselExists){
            const result = await Carousel.create({
            store:CarouselToSave.store,
            label:CarouselToSave.label,
            image: CarouselToSave.image
           });
           createdID = result._id.toString(); 
         } else{
            await Carousel.updateOne({_id:CarouselToSave.id},
                {
                store:CarouselToSave.store,
                label:CarouselToSave.label,
                image: CarouselToSave.image
               });    
         }  
         return new Response(JSON.stringify({id:createdID}), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}), { status: 500 })
    }
    
}