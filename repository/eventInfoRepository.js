const { EventInfo } = require("../model/eventInfo");
const { sequelize } = require("./conf/SequelizeConf");

const EventInfoRepository = {
    findAll : async ()=>{
        const eventInfos = await EventInfo.findAll({
            order : sequelize.random(),
            limit: 7
        });
        return eventInfos;
    }
}


module.exports = { EventInfoRepository }