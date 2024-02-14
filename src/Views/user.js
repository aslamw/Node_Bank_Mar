const express = require("express")
const { create_user, get_user_id } = require("../Controllers/user")

const user = express()


user.get('/:id',get_user_id)

user.post('/user/register',create_user)

module.exports = user