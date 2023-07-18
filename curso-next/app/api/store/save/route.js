import { connectToDB } from "@utils/database";
import Store from '@models/store';

export const POST = async (req) => {
    try {
        const storeToSave = await req.json();
        console.log(storeToSave);
        //SERVERLESS LAMBDA DYNAMODB
        await connectToDB();
        //check if store exists
        const storeExists = await Store.findOne({
            email:storeToSave.email
        })
        //if not, create new user
         if(!storeExists){
            console.log("existe");
           await Store.create({
            name:storeToSave.name,
            description:storeToSave.description,
            contactnumber:storeToSave.contactnumber,
            email:storeToSave.email,
            showwhatssapicon:storeToSave.showwhatssapicon,
            image: storeToSave.image
           }) 
         } else{
            await Store.updateOne({
                name:storeToSave.name,
                description:storeToSave.description,
                contactnumber:storeToSave.contactnumber,
                email:storeToSave.email,
                showwhatssapicon:storeToSave.showwhatssapicon,
                image: storeToSave.image
               })    
         }  
         return new Response(JSON.stringify({holis:"desde backend"}), { status: 200 })
    } catch (error) {
        console.log(error);
        return false;
    }
    
}