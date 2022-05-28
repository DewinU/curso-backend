const jwt = require('jsonwebtoken')
const secret = 'myCat'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1MzY2NjYxNX0.Q3aRXpqNt2N45TTfi5q_CX5kj6UQuM8ytyTr_J4X-RU'

function verifyToken(token, secret) {
    return jwt.verify(token, secret)
}

const payload = verifyToken(token,secret)
console.log(payload)