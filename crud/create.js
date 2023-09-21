require('../connection')

const Product = require('../models/Product')


const createProduct = async () => {
   const phone =  new Product({
        name: 'Phone',
        description: 'IPhone 12',
        price: 699.99
    })
    await phone.save();

    const tv =  new Product({
        name: 'TV',
        description: 'Samsung QLED',
        price: 1999.99
    })
    await tv.save();
 }
 createProduct();