require('./connection')

const Product = require('./models/Product')
const User = require('./models/User')

async function main() {

    const product_1  = new Product({
        name: 'laptop',
        description: 'Macbook Air',
        price: 999.00
    })
    const productSaved = await product_1.save();

    const user_1 = new User({
        username: 'antonibote',
        password: '12345'
    })
    const userSaved = await user_1.save();

    const user_2 = new User({
        username: 'elonmusk',
        password: '54321'
    })
    await user_2.save();

    
    console.log(productSaved);
    console.log(userSaved);
 }
 main();
