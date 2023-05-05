const { HealthRepository } = require("../repository/healthRepository");

const HealthService = {
    ping: (req, res) => res.send(HealthRepository.ping())
}

module.exports = { HealthService }