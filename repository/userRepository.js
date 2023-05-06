const { User } = require("../model/user");
let defaultUserId = 1;

const UserRepository = {
    findAll : async ()=>{
        const user = await User.findAll();
        return user;
    },
    getAuthenticatedUser : async ()=>{
        const authenticatedUser = await User.findByPk(defaultUserId);
        return authenticatedUser.dataValues;
    }
}


module.exports = {UserRepository}