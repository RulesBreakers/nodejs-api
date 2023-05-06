const { request } = require("../app");
const { NotFountException } = require("../model/exception/exception");
const { DreamRepository } = require("../repository/dreamRepository");
const { EventInfoRepository } = require("../repository/eventInfoRepository");
const { PredictionRepository } = require("../repository/predictionRepository");

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
    },
    createDream: async (req, res)=>{
        const userId = req.params.id;
        let toSave = {
            title: req.body.title,
            description : req.body.description,
            userId: userId
        }
        try {
            const result = await DreamRepository.create(toSave);
            if (result!=null) {
                const predictions = await PredictionRepository.findAll();
                const eventInfos = await EventInfoRepository.findAll();
                res.send({ predictions: predictions, eventInfos: eventInfos })
            }
        } catch (err) {
            return InternalServerException(res);
        }
    }
}


module.exports = {DreamService}