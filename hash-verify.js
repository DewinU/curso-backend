const  bycrypt = require('bcrypt')

async function verifyPassword() {
    const myPassword = 'admin123'
    const hash = '$2b$10$s4EjB8MKCrcDeFYbaxnWpeqX2K2Ve2aBWWFbONfKfiAO4ccIFxuE2'
    const isMatch = await bycrypt.compare(myPassword,hash)
    console.log(isMatch)
}


verifyPassword()