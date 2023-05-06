const { STRING } = require("sequelize");
const { sequelize } = require("../repository/conf/SequelizeConf");

const EventInfo = sequelize.define('EventInfo', {
    info: {
        type: STRING
    }
})

EventInfo.sync();

module.exports = { EventInfo }