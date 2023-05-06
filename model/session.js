const { STRING, DATE } = require('sequelize');
const { sequelize } = require('../repository/conf/SequelizeConf');

const Session = sequelize.define('Session', {
  sid: {
    type: STRING,
    primaryKey: true
  },
  expires: DATE,
  data: STRING(50000)
});

Session.sync();

module.exports = { Session }
