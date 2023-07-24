import { connectToDB } from "@utils/database";
import Product from '@models/product';

export const GET = async (req, { params }) => {
    try {
        //SERVERLESS LAMBDA DYNAMODB
        let productExists;
        if(params.field =='product'){
            productExists = await Product.findOne({_id:params.id});
        }else{
            productExists = await Product.find({store:params.id});
        }
        return new Response(JSON.stringify(productExists? productExists: {}), { status: 200 })
         
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}), { status: 500 })

    }
    
}