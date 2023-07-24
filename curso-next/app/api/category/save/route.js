import { connectToDB } from "@utils/database";
import Category from '@models/category';

export const POST = async (req) => {
    try {
        const categoryToSave = await req.json();
        console.log(categoryToSave);
        //SERVERLESS LAMBDA DYNAMODB
        await connectToDB();
        //check if Category exists
        const categoryExists = await Category.findOne({
            _id:categoryToSave.id
        })
        //if not, create new category
         if(!categoryExists){
            console.log(categoryToSave);
           await Category.create({
            store:categoryToSave.store,
            name:categoryToSave.name,
            description:categoryToSave.description,
            type:categoryToSave.type,
            image: categoryToSave.image
           }) 
         } else{
            await Category.updateOne({
                _id:categoryToSave.id,
                store:categoryToSave.store,
                name:categoryToSave.name,
                description:categoryToSave.description,
                type:categoryToSave.type,
                image: categoryToSave.image
               })    
         }  
         return new Response(JSON.stringify({holis:"desde cat"}), { status: 200 })
    } catch (error) {
        console.log(error);
        return false;
    }
    
}