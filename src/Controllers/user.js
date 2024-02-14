const {get_user, add_user, update_user, delete_user} = require("../Models/User/CRUD")

const create_user = async(req,res)=>{
    const data = req.body;

    const result = await add_user(data)
    if (result){
        res.json({result})
    }
    else{
        res.status(404).json({msg:"ID Not Found"})
    }
}

const get_user_id = async(req,res)=>{
    const id = parseInt(req.params.id)
    const result = await get_user({id:id})

    if (result){
        res.json({result})
    }
    else{
        res.status(404).json({msg:"ID Not Found"})
    }
}

module.exports = {
    create_user, get_user_id
}