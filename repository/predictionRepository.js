const { Prediction } = require("../model/prediction");
const { sequelize } = require("./conf/SequelizeConf");

const PredictionRepository = {
    findAll : async ()=>{
        const predictions = await Prediction.findAll({
            order : sequelize.random(),
            limit: 7
        });
        return predictions;
    }
}


module.exports = { PredictionRepository }