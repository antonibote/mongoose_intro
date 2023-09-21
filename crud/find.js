require('../connection')

const Product = require('../models/Product')


async function main() {
    const Products = await Product.find();
    console.log(Products)
 }
 main();