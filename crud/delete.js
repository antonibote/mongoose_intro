require('../connection')

const User = require('../models/User')

const someFunction = async () => {
    const result = await User.deleteMany({username: 'elonmusk'});
    console.log(result)
 }
 someFunction();