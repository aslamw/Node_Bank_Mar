const User = require("./user_tb")

const get_user = async(data) => {

    const get_data = await User.findOne({ where: data});

    return get_data ? get_data.dataValues : false;
};

const add_user = async(data)=>{

    const result = await User.create(data)
    return result ? result.dataValues : false;
}

const update_user = async(data,id)=>{
    const result = await User.update(data, {where: {id}})

    return result ? result.dataValues : false;
}

const delete_user = async(id) =>{
    const result = User.destroy({where: { id }})

    return result ? result.dataValues : false;
}

module.exports = {
    get_user, add_user, update_user, delete_user
}