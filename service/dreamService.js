const { request } = require("../app");
const { NotFountException } = require("../model/exception/exception");
const { DreamRepository } = require("../repository/dreamRepository");

const DreamService = {
    getDreams : async (request, response)=>{
        const result = await DreamRepository.findAll();
        response.send(result)
    },
    getDreamsByUserId: async (req, res)=>{
        const userId = req.params.id;
        try {
            const result = await DreamRepository.getByUserId(userId);
            res.send(result);
        } catch (error) {
            return NotFountException(res, "User not found");
        }
    }
}


module.exports = {DreamService}