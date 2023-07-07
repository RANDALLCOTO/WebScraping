import fetch from 'node-fetch';
import {JSDOM} from 'jsdom';

const productTags = {
    productName: 'productName',
    productDescription: 'productDescription',
    vendorName:'vendorName',
    vendorLink:'vendorLink',
    productImage:'productImage',
    productPrice:'productPrice',
    productLastPrice:'productLastPrice'    
}

const scrapCompanyConfiguration = [
    {
        name:"Gollo Tiendas",
        url:'https://www.gollo.com/catalogsearch/result/?q=SEARCH_TEXT',
        scrapType:'QUERY_PARAMETER',
        replaceTextOnURL:'SEARCH_TEXT',
        companyScrapLogo: "dfsfsdf",
        mainSelector: '.products.wrapper.grid.products-grid ol li',
        scrapingFields: [
            {
                fieldName: 'productPrice',
                type: 'Numeric',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info div .price-box.price-final_price .special-price .price-wrapper .price',
                        selectorValueFrom:"TEXTCONTENT",
                        attribute:null
                    },
                    {
                        order: 2,
                        selector:'.product-item-info div .price-box.price-final_price span span span',
                        selectorValueFrom:"TEXTCONTENT",
                        attribute:null
                    }
                ],
            },
            {
                fieldName: 'vendorLink',
                type: 'String',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info a',
                        selectorValueFrom:"ATTRIBUTE",
                        attribute:'href'
                    }
                ],
            },
            {
                fieldName: 'productImage',
                type: 'String',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info a span span img',
                        selectorValueFrom:"ATTRIBUTE",
                        attribute:'src'
                    }
                ],
            },
            {
                fieldName: 'productName',
                type: 'String',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info div strong a',
                        selectorValueFrom:"TEXTCONTENT",
                        attribute:null
                    }
                ],
            },
        ]
    },
    {
        name:"El Rey",
        url:'https://almaceneselrey.com/catalogsearch/result/?q=SEARCH_TEXT',
        scrapType:'QUERY_PARAMETER',
        replaceTextOnURL:'SEARCH_TEXT',
        companyScrapLogo: "dfsfsdf",
        mainSelector: '.products.wrapper.grid.products-grid ol li',
        scrapingFields: [
            {
                fieldName: 'productPrice',
                type: 'Numeric',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info div .price-box.price-final_price .special-price .price-wrapper .price',
                        selectorValueFrom:"TEXTCONTENT",
                        attribute:null
                    },
                    {
                        order: 2,
                        selector:'.product-item-info div .price-box.price-final_price span span span',
                        selectorValueFrom:"TEXTCONTENT",
                        attribute:null
                    }
                ],
            },
            {
                fieldName: 'vendorLink',
                type: 'String',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info a',
                        selectorValueFrom:"ATTRIBUTE",
                        attribute:'href'
                    }
                ],
            },
            {
                fieldName: 'productImage',
                type: 'String',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info a span span img',
                        selectorValueFrom:"ATTRIBUTE",
                        attribute:'src'
                    }
                ],
            },
            {
                fieldName: 'productName',
                type: 'String',                
                fieldSelectors: [
                    {
                        order: 1,
                        selector:'.product-item-info div strong a',
                        selectorValueFrom:"TEXTCONTENT",
                        attribute:null
                    }
                ],
            },
        ]
    }

]

export const GET = async (request, { params }) => {
    try {
        let products = [];
        for (const company of scrapCompanyConfiguration) {
            //Validate kind of scrap
            let urlToScrap; 
            switch (company.scrapType) {
                case 'QUERY_PARAMETER':
                    urlToScrap = company.url.replace("SEARCH_TEXT",params.text);
                    break;
                default:
                    urlToScrap = '';
                    break;
            }
            
            console.log(urlToScrap);

            //Get the HTMLx and get the main selector
            const companyStoreHTML = await fetch(urlToScrap);
            const companyStoreBody = await companyStoreHTML.text();
            const dom = new JSDOM(companyStoreBody);
            const document = dom.window.document;
            const companyProducts = document.querySelectorAll(company.mainSelector);
            console.log(companyProducts.length);
            //Going through the products we got
            let currentProducts = [];
            companyProducts.forEach((product, index) => {
                console.log(companyProducts.length);
                
                 const temProduct = {};
                 console.log(company.scrapingFields);
                 //Going through the fields configuration
                 company.scrapingFields.forEach((field)=>{
                       let fieldValue = undefined;
                        field.fieldSelectors.forEach(currentSelector => {
                            console.log(currentSelector);
                            if (fieldValue== undefined){
                                switch (currentSelector.selectorValueFrom) {
                                    case "ATTRIBUTE":
                                        fieldValue = product.querySelector(currentSelector.selector)?.getAttribute(currentSelector.attribute);
                                        break;
                                    case "TEXTCONTENT":
                                        fieldValue = product.querySelector(currentSelector.selector)?.textContent.replace(/(\r\n|\n|\r)/gm, "").trim();
                                        break;    
                                    default:
                                        break;
                                }
                            }
                       });
                       temProduct[field.fieldName] = fieldValue;
                 })
                 currentProducts.push(temProduct);
                 //console.log(currentProducts);
            });
            products.push({
                companyName: company.name,
                companyProducts: currentProducts
            });
        };
        console.log(products);
        /*
        const companyStoreHTML = await fetch(`https://www.gollo.com/catalogsearch/result/?q=${params.text}`);
        const companyStoreBody = await companyStoreHTML.text();
        const dom = new JSDOM(companyStoreBody);
        const document = dom.window.document;
        const companyProducts = document.querySelectorAll('.products.wrapper.grid.products-grid ol li');
        
        let products = [];
        [...companyProducts].forEach((product, index) => {
			console.log(companyProducts.length);
            //Check if main node is available
            const testNodeLink = product.querySelector('.product-item-info a')?.getAttribute('href');
            const testNodeImage = product.querySelector('.product-item-info a span span img')?.getAttribute('src');
            const testNodeName = product.querySelector('.product-item-info div strong a')?.textContent;
            let testNodePrice = product.querySelector('.product-item-info div .price-box.price-final_price .special-price .price-wrapper .price')?.textContent;
            testNodePrice = testNodePrice!=undefined? testNodePrice:product.querySelector('.product-item-info div .price-box.price-final_price span span span')?.textContent; 

            const productItemInfo = product.getElementsByClassName('product-item-info')[0]?.getElementsByTagName('a')[0];
            const productItemAditionalInfo = product.getElementsByClassName('product-item-info')[0]?.getElementsByClassName('product-item-details')[0];
            
            if(productItemInfo && productItemAditionalInfo){
             const temProduct = {
                productID: index,
                productName:getGolloDocumentValue(productItemAditionalInfo, productTags.productName),
                productDescription: getGolloDocumentValue(productItemAditionalInfo, productTags.productDescription),
                vendorName:getGolloDocumentValue(null, productTags.vendorName),
                vendorLink: getGolloDocumentValue(productItemInfo,productTags.vendorLink),
                productImage:getGolloDocumentValue(productItemInfo, productTags.productImage),
                productPrice:getGolloDocumentValue(productItemAditionalInfo, productTags.productPrice),//,
                }
            products.push(temProduct);
        }
        });*/
//console.log(products);
        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 

const getGolloPrice = (element)=>{
    
    try {
      return element.getElementsByClassName('price-final_price')[0].getElementsByClassName('special-price')[0].getElementsByClassName('price')[0].textContent      
    } catch (error) {
      return element.getElementsByClassName('price-final_price')[0].getElementsByClassName('price-final_price')[0].getElementsByClassName('price-wrapper')[0].getElementsByClassName('price')[0].textContent      
;
    }
}