const { UserRepository } = require("../repository/userRepository");

const UserService = {
    getUsers : async (request, response)=>{
        const result = await UserRepository.findAll();
        return response.status(200).json(result);
    }
}


module.exports = {UserService}