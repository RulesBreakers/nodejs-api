const { request } = require("../app");
const { NotFountException, InternalServerException } = require("../model/exception/exception");
const { OnirixSimulator } = require("../model/modelAi.js/onirixsimulation");
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
            if (result!=null && !result?.description.toLowerCase().includes("cauchemar")) {
                const interpretation = await OnirixSimulator.interprete(result?.description);
                res.send(JSON.parse(interpretation))
            }else{
                res.send({ interpretation: "Je suis désolé d'apprendre que vous avez fait un cauchemar. Les cauchemars peuvent être un indicateur de stress ou d'anxiété et il est important de prendre soin de votre bien-être mental. Je vous recommande de consulter un professionnel de la santé mentale qualifié pour discuter de vos préoccupations et obtenir un soutien approprié. Vous pouvez également contacter une ligne d'assistance téléphonique de santé mentale si vous avez besoin de parler à quelqu'un immédiatement.", events : []})
            }
        } catch (err) {
            return res.status(201).send({ interpretation: "Je suis désolé, je n'ai pas trouvé de réponse à votre question. Interpréter les rêves est un processus complexe et il peut être difficile de trouver des réponses précises à toutes les questions. Essayez de reformuler votre question ou de la poser sous un angle différent. Si vous avez d'autres questions, n'hésitez pas à les poser.", events : []});
        }
    }
}


module.exports = {DreamService}