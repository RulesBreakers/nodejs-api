const { EventInfo } = require("../model/eventInfo");
const { Prediction } = require("../model/prediction");
const { sequelize } = require("./conf/SequelizeConf");

const PredictionRepository = {
    findAll : async ()=>{
        const predictions = await Prediction.findAll({
            include : [
                { model : EventInfo, require: true}
            ]
        });
        return predictions;
    }
}


module.exports = { PredictionRepository }