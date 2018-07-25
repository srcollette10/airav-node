'use strict'

const visionService = require('../services/vision.service')

const read = {
    read: (request, response, next) => {
        visionService.ping()
    }
}

module.exports = read