const { STRING, TIME, INTEGER } = require("sequelize");
const { sequelize } = require("../repository/conf/SequelizeConf");

const Dream = sequelize.define('Dream', {
    title: {
        type: STRING
    },
    description: {
        type: STRING
    },
    createdAt: {
        type: TIME,
        defaultValue: new Date().toLocaleDateString()
    },
    userId : {
        type : INTEGER   
    }
})

Dream.sync();

module.exports = { Dream }