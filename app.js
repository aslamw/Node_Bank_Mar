const express = require("express")
const DB = require("./src/Models/DB")
const User = require("./src/Models/User/user_tb")

const user = require("./src/Views/user")


const app = express()
const port = 3000
app.use(express.json())

app.use(user)


app.listen(port, ()=>{
    
    DB.sync()
        .then(() => {
            console.log('Modelo sincronizado com o banco de dados');
            console.log("Server OK porta:",port);
            
        })
        .catch((err) => {
            console.error('Erro ao sincronizar o modelo com o banco de dados:', err);
        });
    
    
})