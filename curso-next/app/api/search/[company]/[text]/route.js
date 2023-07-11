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
        id:1,
        name:"Gollo Tiendas",
        url:'https://www.gollo.com/catalogsearch/result/?q=SEARCH_TEXT',
        scrapType:'QUERY_PARAMETER',
        replaceTextOnURL:'SEARCH_TEXT',
        logoSelector: ".logo img",
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
        id:2,
        name:"El Rey",
        url:'https://almaceneselrey.com/catalogsearch/result/?q=SEARCH_TEXT',
        scrapType:'QUERY_PARAMETER',
        replaceTextOnURL:'SEARCH_TEXT',
        logoSelector: ".logo picture img",
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
        id:3,
        name:"Pequeño Mundo",
        url:'https://tienda.pequenomundo.com/catalogsearch/result/?q=SEARCH_TEXT',
        scrapType:'QUERY_PARAMETER',
        replaceTextOnURL:'SEARCH_TEXT',
        logoSelector: ".logo img",
        mainSelector: '.products.wrapper.grid.products-grid.columns4 ol li',
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
                        selector:'.product-item-info .product-item-photo a img',
                        selectorValueFrom:"ATTRIBUTE",
                        attribute:'data-src'
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

const getCompanyConfiguration =(companyID)=>{
    return scrapCompanyConfiguration.filter(element => element.id == companyID);
}

export const GET = async (request, { params }) => {
    try {
        let products = [];
        console.log(params.company);
        for (const company of getCompanyConfiguration(params.company)) {
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
            

            //Get the HTMLx and get the main selector
            const companyStoreHTML = await fetch(urlToScrap);
            const companyStoreBody = await companyStoreHTML.text();
            const dom = new JSDOM(companyStoreBody);
            const document = dom.window.document;
            const companyProducts = document.querySelectorAll(company.mainSelector);
            const companyLogo = document.querySelector(company.logoSelector)?.getAttribute('src');
            //Going through the products we got
            let currentProducts = [];
            companyProducts.forEach((product, index) => {
                
                 const temProduct = {};
                 //Going through the fields configuration
                 company.scrapingFields.forEach((field)=>{
                       let fieldValue = undefined;
                        field.fieldSelectors.forEach(currentSelector => {
                            if (fieldValue== undefined){
                                switch (currentSelector.selectorValueFrom) {
                                    case "ATTRIBUTE":
                                        fieldValue = product.querySelector(currentSelector.selector)?.getAttribute(currentSelector.attribute);
                                        break;
                                    case "TEXTCONTENT":
                                        fieldValue = product.querySelector(currentSelector.selector)?.textContent.replace(/(\r\n|\n|\r)/gm, "").trim();
                                        break;    
                                    case "INNERHTML":
                                            fieldValue = product.querySelector(currentSelector.selector)?.innerHTML;
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
                companyLogo: companyLogo,
                companyProducts: currentProducts
            });
            console.log(currentProducts[0]);
        };
        return new Response(JSON.stringify(products[0]), { status: 200 })
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