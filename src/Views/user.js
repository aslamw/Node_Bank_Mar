const express = require("express")

const user = express()


user.get('/',(req, res)=>{
    res.send('user router ok')
})
user.post('/user/register',(req, res)=>{
    const data = req.body
    res.send('user router ok')
})

module.exports = user