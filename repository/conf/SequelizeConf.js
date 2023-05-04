const Sequelize = require("sequelize")
require("dotenv").config();

const sequelize = new Sequelize(process.env.HOST , {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(()=>{
    console.log("success");
}).catch((err)=>{
    console.log("failure"+ err);
})

module.exports = {sequelize}