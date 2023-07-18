import { connectToDB } from "@utils/database";
import Store from '@models/store';

export const GET = async (req, { params }) => {
    try {
        //SERVERLESS LAMBDA DYNAMODB
        await connectToDB();
        //check if store exists
        const storeExists = await Store.findOne({
            email:params.email
        })
        return new Response(JSON.stringify(storeExists), { status: 200 })
        //if not, create new user
         if(!storeExists){
            //console.log(storeExists);
            //return new Response(JSON.stringify({}), { status: 200 }) 
         } else{
            //console.log(storeExists);
            //return new Response(JSON.stringify(storeExists), { status: 200 }) 

         }  
    } catch (error) {
        console.log(error);
        return false;
    }
    
}