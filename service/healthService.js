const { HealthRepository } = require("../repository/healthRepository");

const HealthService = {
    ping: (req, res) => res.status(200).json(HealthRepository.ping())
}

module.exports = { HealthService }