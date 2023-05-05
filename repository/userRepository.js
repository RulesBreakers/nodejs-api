const { User } = require("../model/user");

const UserRepository = {
    findAll : async ()=>{
        const user = await User.findAll();
        return user;
    }
}


module.exports = {UserRepository}