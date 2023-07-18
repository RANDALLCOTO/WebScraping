import { connectToDB } from "@utils/database";
import Product from '@models/product';

export const GET = async (req, { params }) => {
    try {
        //SERVERLESS LAMBDA DYNAMODB
        await connectToDB();
        //check if product exists
        const productExists = await product.findOne({
            email:params.email
        })
        return new Response(JSON.stringify(productExists), { status: 200 })
        //if not, create new user
         if(!productExists){
            //console.log(productExists);
            //return new Response(JSON.stringify({}), { status: 200 }) 
         } else{
            //console.log(productExists);
            //return new Response(JSON.stringify(productExists), { status: 200 }) 

         }  
    } catch (error) {
        console.log(error);
        return false;
    }
    
}