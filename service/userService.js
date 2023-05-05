const { UserRepository } = require("../repository/userRepository");

const UserService = {
    getUsers : async (request, response)=>{
        const result = await UserRepository.findAll();
        response.send(result)
    }
}


module.exports = {UserService}