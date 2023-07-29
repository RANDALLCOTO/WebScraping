import { connectToDB } from "@utils/database";
import Store from '@models/store';
import Category from "@models/category";
import Product from "@models/product";
import Carousel from "@models/carousel";
export const GET = async (req, { params }) => {
    try {
        //DB
        await connectToDB();
        let storeInfo = {};
        //Check if store exists
        let store;
        store = await Store.findOne({user:params.id});
        if(typeof store == undefined)
             return new Response(JSON.stringify({}), { status: 200 })

        storeInfo['store']= store;

        let categories = await Category.find({store:store._id.toString()});
        console.log(categories.length);
        if(categories.length == 0)
             return new Response(JSON.stringify(store), { status: 200 })

        let products = await Product.find({store:store._id.toString()})

        let categoryArray= [];
        categories.forEach(category => {
            const productsTemp = products.filter((element)=> element.category == category._id)
    
            categoryArray.push({categoryInfo: category,
                                        categoryProducts: productsTemp});  
        });

        storeInfo['categories'] = categoryArray;

        let carouselImages = await Carousel.find({store:store._id.toString()});

        if(carouselImages.length > 0)
            storeInfo['carousel'] = carouselImages;

        return new Response(JSON.stringify(storeInfo), { status: 200 })
         
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}), { status: 500 })

    }
    
}