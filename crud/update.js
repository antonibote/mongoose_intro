require('../connection')

const User = require('../models/User')

async function updateUsers() {
    const user = await User.updateMany({username: 'antonibote'}, {
        password:'contraseñasegura'
    });
    console.log(user)
 }
 updateUsers();