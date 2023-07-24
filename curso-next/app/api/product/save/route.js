import { connectToDB } from "@utils/database";
import Product from '@models/product';

export const POST = async (req) => {
    try {
        const productToSave = await req.json();
        console.log(productToSave);
        //SERVERLESS LAMBDA DYNAMODB
        await connectToDB();
        //check if Product exists
        const productExists = await Product.findOne({
            _id:productToSave.id
        })
        //if not, create new product
         if(!productExists){
            console.log(productToSave);
           await Product.create({
            store:productToSave.store,
            name:productToSave.name,
            description:productToSave.description,
            category:productToSave.category,
            price:productToSave.price,
            especialprice:productToSave.especialPrice,
            currency:productToSave.currency,
            image: productToSave.image
           }) 
         } else{
            await Product.updateOne({
                _id:productToSave.id,
                store:productToSave.store,
                name:productToSave.name,
                description:productToSave.description,
                price:productToSave.price,
                especialprice:productToSave.especialPrice,
                currency:productToSave.currency,
                image: productToSave.image
               })    
         }  
         return new Response(JSON.stringify({holis:"desde backend"}), { status: 200 })
    } catch (error) {
        console.log(error);
        return false;
    }
    
}