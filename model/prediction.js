const { STRING } = require("sequelize");
const { sequelize } = require("../repository/conf/SequelizeConf");

const Prediction = sequelize.define('Prediction', {
    description: {
        type: STRING
    }
})

Prediction.sync();

module.exports = { Prediction }