import { connectToDB } from "@utils/database";
import Category from '@models/category';

export const POST = async (req) => {
    try {
        const categoryToSave = await req.json();
        let createdID;
         //DB
         await connectToDB();
        //check if Category exists
        const categoryExists = await Category.findOne({
            _id:categoryToSave.id
        })
        //if not, create new category
         if(!categoryExists){
            const result = await Category.create({
            store:categoryToSave.store,
            name:categoryToSave.name,
            description:categoryToSave.description,
            type:categoryToSave.type,
            image: categoryToSave.image
           });
           createdID = result._id.toString(); 
         } else{
            await Category.updateOne({_id:categoryToSave.id},
                {
                store:categoryToSave.store,
                name:categoryToSave.name,
                description:categoryToSave.description,
                type:categoryToSave.type,
                image: categoryToSave.image
               });    
         }  
         return new Response(JSON.stringify({id:createdID}), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}), { status: 500 })
    }
    
}