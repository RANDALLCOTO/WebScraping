import fetch from 'node-fetch';
import {JSDOM} from 'jsdom';

export const GET = async (request, { params }) => {
    try {
        const mongeStoreHTML = await fetch(`https://www.gollo.com/catalogsearch/result/?q=${params.text}`);
        const mongeStoreBody = await mongeStoreHTML.text();
        const dom = new JSDOM(mongeStoreBody);
        const document = dom.window.document;
        const mongeProducts = document.querySelectorAll('.product-items > .product-item');

        let products = [];
        [...mongeProducts].forEach((product, index) => {
			
            const productItemInfo = product.getElementsByClassName('product-item-info')[0].getElementsByTagName('a')[0];
            const productItemAditionalInfo = product.getElementsByClassName('product-item-info')[0].getElementsByClassName('product-item-details')[0];
   
             const temProduct = {
                productID: index,
                productName:productItemAditionalInfo.getElementsByTagName('strong')[0].getElementsByTagName('a')[0].textContent,
                productDescription:productItemAditionalInfo.getElementsByTagName('strong')[0].getElementsByTagName('a')[0].textContent,
                vendorName:"Gollo",
                vendorLink:productItemInfo.getAttribute('href'),
                productImage:productItemInfo.getElementsByTagName('span')[0].getElementsByTagName('span')[0].getElementsByTagName('img')[0].getAttribute('src'),
                productPrice:getPrice(productItemAditionalInfo),//,
                lastPrice:0
                //lastPrice:productItemAditionalInfo.getElementsByClassName('price-final_price')[0]?.getElementsByClassName('old-price')[0]?.getElementsByClassName('price')[0].textContent
            }
            products.push(temProduct);
        });
//console.log(products);
        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 

const getPrice = (element)=>{
    
    try {
      return element.getElementsByClassName('price-final_price')[0].getElementsByClassName('special-price')[0].getElementsByClassName('price')[0].textContent      
    } catch (error) {
      return element.getElementsByClassName('price-final_price')[0].getElementsByClassName('price-final_price')[0].getElementsByClassName('price-wrapper')[0].getElementsByClassName('price')[0].textContent      
;
    }
}