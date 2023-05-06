const { NotFountException } = require("../model/exception/exception");
const { UserRepository } = require("../repository/userRepository");

const UserService = {
    getUsers : async (request, response)=>{
        const result = await UserRepository.findAll();
        response.send(result)
    },
    getAuthenticatedUser : async ()=>{
        const result = await UserRepository.getAuthenticatedUser();
        return result;
    }
}


module.exports = {UserService}