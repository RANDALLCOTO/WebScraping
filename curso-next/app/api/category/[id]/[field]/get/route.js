import { connectToDB } from "@utils/database";
import Category from '@models/category';

export const GET = async (req, { params }) => {
    try {
        //SERVERLESS LAMBDA DYNAMODB

        await connectToDB();
        //check if category exists
        let categoryExists;
        if(params.field =='category'){
            categoryExists = await Category.findOne({_id:params.id});
        }else{
            categoryExists = await Category.find({store:params.id});
        }

        return new Response(JSON.stringify(categoryExists? categoryExists: {}), { status: 200 })
         
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}), { status: 500 })

    }
    
}