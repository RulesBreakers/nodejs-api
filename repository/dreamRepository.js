const { Dream } = require("../model/dream");

const DreamRepository = {
    findAll : async ()=>{
        const dreams = await Dream.findAll();
        return dreams;
    },
    getByUserId : async (userId)=>{
        const authenticatedUserDreams = await Dream.findAll({ where: {
            userid : userId
        } });
        return authenticatedUserDreams;
    },
    create: async (dream)=>{
        const saved = await Dream.create(dream);
        return saved;
    }
}


module.exports = {DreamRepository}