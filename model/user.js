const { STRING } = require("sequelize");
const { sequelize } = require("../repository/conf/SequelizeConf");

const User = sequelize.define('User', {
    name: {
        type: STRING
    }
})


User.sync();

module.exports = { User }