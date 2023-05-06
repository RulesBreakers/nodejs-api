const { User } = require("../model/user");

const UserRepository = {
    findById : async (userId)=>{
        const user = await User.findByPk(userId);
        return user;
    },
    getAuthenticatedUser : async (username)=>{
        const authenticatedUser = await User.findOne({
            where: {
                userName: username
            }
        });
        return authenticatedUser.dataValues;
    },
    create: async(user)=>{
        const saved = await User.create(user);
        return saved;
    }
}


module.exports = {UserRepository}