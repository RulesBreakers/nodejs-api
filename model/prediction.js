const { STRING } = require("sequelize");
const { sequelize } = require("../repository/conf/SequelizeConf");
const { EventInfo } = require("./eventInfo");

const Prediction = sequelize.define('Prediction', {
    dream : {
        type: STRING
    },
    description: {
        type: STRING
    }
})

Prediction.hasMany(EventInfo, { foreignKey: "predictionid" })
Prediction.sync();

module.exports = { Prediction }