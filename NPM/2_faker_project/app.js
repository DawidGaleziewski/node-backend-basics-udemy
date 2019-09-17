var faker = require('faker');

function generateProductList(numberOfProducts){
    console.log("==================================")
    console.log("=           SHOP                 =")
    console.log("==================================")

    for(let i = 0; i < numberOfProducts; i++){
        let productLine = `${faker.commerce.productName()} - ${faker.commerce.price()}\$`;
        console.log(productLine)
    }
}

generateProductList(10)

