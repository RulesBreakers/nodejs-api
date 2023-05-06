const createHttpError = require("http-errors");
const { NotFountException, InternalServerException } = require("../model/exception/exception");
const { UserRepository } = require("../repository/userRepository");

const UserService = {
    getUserById : async (request, response)=>{
        const userId = request.params.id;
        try {
            const result = await UserRepository.findById(userId);
            response.send(result)
        } catch (error) {
            return NotFountException(res, "User not found")
        }
    },
    getAuthenticatedUser : async (username)=>{
        try {
            const result = await UserRepository.getAuthenticatedUser(username);
            return result;
        } catch (err) {
            createHttpError(404)
        }
    },
    createUser: async (req, res)=>{
        try {
            const result = await UserRepository.create(req.body);
            res.send(result)
        } catch (err) {
            return InternalServerException(res);
        }
    }
}


module.exports = {UserService}