require('./connection')

const Product = require('./models/Product')

const product_1  = new Product({
    name: 'laptop',
    description: 'Macbook Air',
    price: 999.00
})

let output;
async function run() {
    output = await product_1.save();
 }
 run();
 console.log(product_1);

