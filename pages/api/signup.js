import cookie from 'cookie'

require("dotenv").config();

const jwt = require('jsonwebtoken')
const JWTKEY = process.env.SECRET_KEY;


export default async (req, res) =>{
    if (req.method=="GET"){
        res.status(405).json('invalid request method!')
    }
    else {
    const login=JSON.parse(req.body)
    const mail=login.email
    const pass=login.pass
    const userToken = jwt.sign({mail}, JWTKEY)
    console.log(mail)
    console.log(pass)
    console.log(userToken)
    res.status(200).json(200)
    }
}