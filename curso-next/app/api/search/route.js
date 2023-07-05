export const GET = async (request) => {
    try {
        const products = [
            {
                productID: 1,
                productName:"Iphone 5",
                productDescription:"Especial Iphone 5, llevalo a un 50% de precio de lo acostumbrado",
                vendorName:"Gollo",
                vendorLink:"https://test.com",
                productImage:"https://t1.uc.ltmcdn.com/es/posts/0/2/0/como_hacer_que_mi_iphone_5_vaya_mas_rapido_29020_600.jpg",
                productPrice:"9,098.00"
            },
            {
                productID: 2,
                productName:"Iphone 5s",
                productDescription:"Especial Iphone 5, llevalo a un 50% de precio de lo acostumbrado",
                vendorName:"Tiendas Monge",
                vendorLink:"https://test.com",
                productImage:"https://cdn.vox-cdn.com/thumbor/zQJOOAkWYNFkumfGHV37pJ0nEQ4=/0x0:1100x767/2000x1333/filters:focal(550x383:551x384)/cdn.vox-cdn.com/uploads/chorus_asset/file/14419091/iphone5_ios7.1419979801.jpg",
                productPrice:"9,000.00"
            },
            {
                productID: 3,
                productName:"Iphone 5s",
                vendorName:"Tiendas el Rey",
                productDescription:"Especial Iphone 5, llevalo a un 50% de precio de lo acostumbrado",
                vendorLink:"https://test.com",
                productImage:"https://i.blogs.es/525784/650_1000_iphone-205s-20grafito-1/1366_2000.jpg",
                productPrice:"5,0000.00"
            },
            {
                productID: 4,
                productName:"Iphone 5",
                vendorName:"La tiendita del torero",
                productDescription:"Especial Iphone 5, llevalo a un 50% de precio de lo acostumbrado",
                vendorLink:"https://test.com",
                productImage:"",
                productPrice:"9,098.00"
            },
            {
                productID: 5,
                productName:"Iphone 5 Mini",
                productDescription:"Especial Iphone 5, llevalo a un 50% de precio de lo acostumbrado",
                vendorName:"El rey",
                vendorLink:"https://google.com",
                productImage:"",
                productPrice:"9,777.00"
            },
            {
                productID: 6,
                productName:"Iphone 5 Mini",
                productDescription:"Especial Iphone 5, llevalo a un 50% de precio de lo acostumbrado",
                vendorName:"Gollo",
                vendorLink:"https://test.com",
                productImage:"",
                productPrice:"9,098.00"
            },
        ];

        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 