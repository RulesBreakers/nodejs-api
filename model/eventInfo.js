const { STRING, INTEGER } = require("sequelize");
const { sequelize } = require("../repository/conf/SequelizeConf");

const EventInfo = sequelize.define('EventInfo', {
    info: {
        type: STRING
    },
    predictionid: {
        type: INTEGER
    }
})


EventInfo.sync();

module.exports = { EventInfo }