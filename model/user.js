const { STRING } = require("sequelize");
const { sequelize } = require("../repository/conf/SequelizeConf");
const { Dream } = require("./dream");
const bcrypt = require("bcrypt");

const User = sequelize.define('User', {
    firstName: {
        type: STRING
    },
    lastName: {
        type: STRING
    },
    userName: {
        type: STRING,
        allowNull: false
    },
    password: {
        type: STRING,
        allowNull: false
    },
})

User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

User.hasMany(Dream, { foreignKey: "userId" })
User.sync();

module.exports = { User }