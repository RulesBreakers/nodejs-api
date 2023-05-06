const { EventInfo } = require("../model/eventInfo");
const { sequelize } = require("./conf/SequelizeConf");

const EventInfoRepository = {
    findAll : async ()=>{
        const eventInfos = await EventInfo.findAll();
        return eventInfos;
    }
}


module.exports = { EventInfoRepository }